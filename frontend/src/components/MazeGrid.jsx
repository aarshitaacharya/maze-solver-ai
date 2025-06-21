import React, { useEffect, useState } from 'react'

function MazeGrid({ maze, visited, path }) {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    if (!maze || maze.length === 0) return;
    const copy = maze.map(row => [...row]);

    let i = 0;
    let visitInterval;
    let pathInterval;

    visitInterval = setInterval(() => {
      if (i < visited.length) {
        const [r, c] = visited[i];
        if (copy[r] && copy[r][c] !== undefined && copy[r][c] !== 'S' && copy[r][c] !== 'G') copy[r][c] = 'v';
        setGrid(copy.map(row => [...row]));
        i++;
      } else {
        clearInterval(visitInterval);

        let j = 0;
        pathInterval = setInterval(() => {
          if (j < path.length) {
            const [r, c] = path[j];
            if (copy[r] && copy[r][c] !== undefined && copy[r][c] !== 'S' && copy[r][c] !== 'G') copy[r][c] = '*';
            setGrid(copy.map(row => [...row]));
            j++;
          } else {
            clearInterval(pathInterval);
          }
        }, 100);
      }
    }, 50);

    return () => {
      clearInterval(visitInterval);
      clearInterval(pathInterval);
    };
  }, [maze, visited, path]);

  const getCellClass = (cell) => {
    switch(cell) {
      case "#": return "maze-cell wall";
      case "S": return "maze-cell start";
      case "G": return "maze-cell goal";
      case "v": return "maze-cell visited";
      case "*": return "maze-cell path";
      default: return "maze-cell empty";
    }
  };

  const getCellContent = (cell) => {
    switch(cell) {
      case "S": return "🏁";
      case "G": return "🎯";
      case "*": return "✨";
      default: return "";
    }
  };

  if (!grid.length) return null;

  return (
    <div className="maze-grid-container">
      <div 
        className="maze-grid" 
        style={{ gridTemplateColumns: `repeat(${maze[0]?.length || 0}, 1fr)` }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={getCellClass(cell)}
            >
              {getCellContent(cell)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MazeGrid