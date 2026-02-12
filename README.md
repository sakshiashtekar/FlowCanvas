# FlowCanvas

FlowCanvas is a web-based tool that helps you design data processing pipelines visually. Instead of writing code, you can drag and drop different types of nodes (like input, output, text processing, LLM, math operations, filters, and more) and connect them together to create workflows. The application automatically validates your pipelines to ensure they work correctly without any circular connections.

## Features

The project provides a drag-and-drop interface for creating workflows with multiple node types including input/output nodes, text processing, language models, mathematical operations, conditional logic, and data merging. Your pipelines are validated in real-time to ensure they form valid structures, and you get immediate feedback on the number of nodes, edges, and whether your pipeline is properly structured.

## Technology Stack

The frontend is built with React and uses ReactFlow for the visual node-and-edge interface, while the backend runs on FastAPI to validate and process your pipelines. The frontend uses Zustand for state management and CSS for styling, making it lightweight and responsive.

## Getting Started

First, you'll need Node.js (v14+), npm, and Python 3.8+ installed on your computer. Clone or download the project, then navigate to the frontend folder and run `npm install` followed by `npm start`. In a separate terminal, go to the backend folder, create a Python virtual environment with `python -m venv venv`, activate it with `source venv/bin/activate` (on Mac/Linux) or `venv\Scripts\activate` (on Windows), then install dependencies with `pip install fastapi uvicorn python-multipart`, and finally start the server with `uvicorn main:app --reload --port 8000`. Your frontend will run on `http://localhost:3000` and backend on `http://localhost:8000`.

## How to Use

Once both servers are running, open the application in your browser. You can add nodes to the canvas using the toolbar, connect them by drawing edges between them, and then click the submit button to validate your pipeline. The system will show you a summary with the total number of nodes, edges, and whether your pipeline is valid.

## Project Structure

The project is organized into two main folders. The frontend folder contains all React components including specific node types (input, output, text, LLM, math, condition, filter, merge, and delay nodes), the main app component, state management, styling, and utilities for handling the UI. The backend folder has a single main.py file that contains the FastAPI server configuration and the pipeline validation logic using a graph-based algorithm to detect cycles.

## API Overview

The backend provides two main endpoints. A health check endpoint at `GET /` that returns a simple "Pong" message, and a pipeline parsing endpoint at `POST /pipelines/parse` that accepts your nodes and edges data. The parsing endpoint validates your pipeline and returns the number of nodes, number of edges, and whether it's a valid directed acyclic graph (DAG).

## Deployment

To prepare for deployment, run `npm run build` in the frontend folder to create an optimized production build. You can then deploy the build folder to services like Vercel, Netlify, or AWS S3. For the backend, update the CORS settings to allow your production frontend URL instead of localhost, and deploy to platforms like Heroku, AWS Lambda, Google Cloud Run, or Railway using a production ASGI server.

## Contributing and Support

Feel free to fork the project, create branches for new features, make improvements, and submit pull requests. If you find any issues or have suggestions, open an issue in the repository. Remember to update the CORS configuration when moving to production and validate all user inputs on both frontend and backend for security.
