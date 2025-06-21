import { useEffect, useState } from 'react'
import './App.css'
import MazeGrid from './components/MazeGrid';

function App() {
  const [mazeData, setMazeData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5050/api/solve", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ maze: "maze1", algorithm: "bfs" })
    })
      .then(res => res.json())
      .then(data => {
        fetch("http://localhost:5050/api/maze?name=maze1")
          .then(res => res.json())
          .then(mazeRes => {
            setMazeData({
              maze: mazeRes.maze,
              visited: data.visited,
              path: data.path
            });
          });
      });
  }, []); 


  if(!mazeData) return <div> Loading ...</div>

  return (
    <div>
      <h2>Maze Solver Visualizer</h2>
      <MazeGrid {...mazeData}/>
    </div>
  )
}

export default App
