import { useState } from 'react'
import './App.css'
import MazeGrid from './components/MazeGrid';

function App() {
  const [mazeData, setMazeData] = useState(null);
  const [mazeName, setMazeName] = useState("maze1");
  const [algorithm, setAlgorithm] = useState("bfs");
  const [solving, setSolving] = useState(false);

  const handleSolve = async () => {
    setSolving(true);
    try {
      const response = await fetch("http://localhost:5050/api/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maze: mazeName,
          algorithm: algorithm
        })
      });

      const data = await response.json();
      const mazeResponse = await fetch(`http://localhost:5050/api/maze?name=${mazeName}`);
      const mazeJson = await mazeResponse.json();

      setMazeData({
        maze: mazeJson.maze,
        visited: data.visited,
        path: data.path,
      });

    } catch (err) {
      console.log(err);
    } finally {
      setSolving(false);
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Choose Maze:
        <select value={mazeName} onChange={e => setMazeName(e.target.value)}>
          <option value="maze1">Maze 1</option>
          <option value="maze2">Maze 2</option>
          <option value="maze3">Maze 3</option>
        </select>
      </label>

      <label style={{ marginLeft: "2rem" }}>
        Algorithm:
        <select value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
          <option value="bfs">BFS</option>
          <option value="dfs">DFS</option>
          <option value="astar">A*</option>
        </select>
      </label>

      <button
        onClick={handleSolve}
        disabled={solving}
        className={`${
          solving ? "bg-gray-400" : "bg-blue-600"
        } text-white px-4 py-2 rounded mt-4`}
      >
        {solving ? "Solving..." : "Solve"}
      </button>

      {mazeData ? (
        <MazeGrid
          maze={mazeData.maze}
          path={mazeData.path}
          visited={mazeData.visited}
        />
      ) : (
        <div style={{ marginTop: "2rem" }}>Click "Solve" to visualize the maze</div>
      )}
    </div>
  );
}


export default App
