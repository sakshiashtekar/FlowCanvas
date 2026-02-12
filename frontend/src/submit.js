// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!res.ok) {
        throw new Error("Failed to parse pipeline");
      }

      const data = await res.json();

      alert(
        `Pipeline Summary:\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? "Yes" : "No"}`
      );

    } catch (err) {
      alert(`Error: ${err.message}`);
      console.error(err);
    }
  };

  return (
    <button className="submit-btn" onClick={handleSubmit}>
      Submit
    </button>
  );
};
