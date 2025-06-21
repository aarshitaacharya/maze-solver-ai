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
    try{
      const response = await fetch("https://maze-solver-ai.onrender.com/api/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maze: mazeName,
          algorithm: algorithm
        })
      })

      const data = await response.json();
      const mazeResponse = await fetch(`https//maze-solver-ai.onrender.com/api/maze?name=${mazeName}`);
      const mazeJson = await mazeResponse.json()

      setMazeData({
        maze: mazeJson.maze,
        visited: data.visited,
        path: data.path,
      })
 
    } catch(err){
      console.log(err);
    }finally{
      setSolving(false);
    }
  }

  if (!mazeData) {
    return (
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-title">🧩 Maze Solver Pro</h1>
          <p className="app-subtitle">Visualize pathfinding algorithms in action</p>
        </div>
        
        <div className="controls-section">
          <div className="controls-container">
            <div className="control-group">
              <label className="control-label">
                🗺️ Choose Maze:
              </label>
              <select 
                className="control-select" 
                value={mazeName} 
                onChange={e => setMazeName(e.target.value)}
              >
                <option value="maze1">🏰 Castle Maze</option>
                <option value="maze2">🌲 Forest Maze</option>
                <option value="maze3">🏔️ Mountain Maze</option>
              </select>
            </div>

            <div className="control-group">
              <label className="control-label">
                🧠 Algorithm:
              </label>
              <select 
                className="control-select" 
                value={algorithm} 
                onChange={e => setAlgorithm(e.target.value)}
              >
                <option value="bfs">🌊 Breadth-First Search</option>
                <option value="dfs">🌲 Depth-First Search</option>
                <option value="astar">⭐ A* Algorithm</option>
              </select>
            </div>

            <div className="control-group">
              <button
                onClick={handleSolve}
                disabled={solving}
                className="solve-button"
              >
                {solving ? "🔄 Solving..." : "🚀 Solve Maze"}
              </button>
            </div>
          </div>
        </div>

        <div className="loading-container">
          <div className="loading-card">
            <div className="loading-icon">🎯</div>
            <h3 className="loading-title">Ready to Solve!</h3>
            <p className="loading-text">Choose a maze and algorithm, then click "Solve" to watch the magic happen.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">🧩 Maze Solver - Aarshita</h1>
        <p className="app-subtitle">Visualize pathfinding algorithms in action</p>
      </div>
      
      <div className="controls-section">
        <div className="controls-container">
          <div className="control-group">
            <label className="control-label">
              Choose Maze:
            </label>
            <select 
              className="control-select" 
              value={mazeName} 
              onChange={e => setMazeName(e.target.value)}
            >
              <option value="maze1">Castle Maze</option>
              <option value="maze2">Forest Maze</option>
              <option value="maze3">Mountain Maze</option>
            </select>
          </div>

          <div className="control-group">
            <label className="control-label">
              Algorithm:
            </label>
            <select 
              className="control-select" 
              value={algorithm} 
              onChange={e => setAlgorithm(e.target.value)}
            >
              <option value="bfs">Breadth-First Search</option>
              <option value="dfs">Depth-First Search</option>
              <option value="astar">A* Algorithm</option>
            </select>
          </div>

          <div className="control-group">
            <button
              onClick={handleSolve}
              disabled={solving}
              className="solve-button"
            >
              {solving ? " Solving..." : " Solve Maze"}
            </button>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="legend-container">
        <h3 className="legend-title">Legend</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-cell start">S</div>
            <span>Start</span>
          </div>
          <div className="legend-item">
            <div className="legend-cell goal">G</div>
            <span>Goal</span>
          </div>
          <div className="legend-item">
            <div className="legend-cell wall"></div>
            <span>Wall</span>
          </div>
          <div className="legend-item">
            <div className="legend-cell visited"></div>
            <span>Visited</span>
          </div>
          <div className="legend-item">
            <div className="legend-cell path">*</div>
            <span>Path</span>
          </div>
        </div>
      </div>

      {/* Maze */}
      <div className="maze-container">
        <div className="maze-header">
          <h2 className="maze-title">
            {algorithm === 'bfs' ? '🌊' : algorithm === 'dfs' ? '🌲' : '⭐'} {algorithm.toUpperCase()} Solution
          </h2>
        </div>
        <MazeGrid 
          maze={mazeData.maze}
          path={mazeData.path}
          visited={mazeData.visited} 
        />
      </div>
    </div>
  );
}

export default App