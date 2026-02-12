from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# frontend access localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: list
    edges: list

def is_dag(nodes, edges):
    # only build edges for nodes that exist
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        src = edge.get("source")
        tgt = edge.get("target")
        if src in graph and tgt in graph:
            graph[src].append(tgt)

    visited = set()
    onstack = set()

    def dfs(node):
        if node in onstack:
            return False
        if node in visited:
            return True
        onstack.add(node)
        for neigh in graph.get(node, []):
            if not dfs(neigh):
                return False
        onstack.remove(node)
        visited.add(node)
        return True

    for n in graph:
        if n not in visited:
            if not dfs(n):
                return False
    return True

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes or []
    edges = pipeline.edges or []

    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_status = is_dag(nodes, edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag_status}
