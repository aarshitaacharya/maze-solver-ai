import React, { useEffect, useState } from 'react'

function MazeGrid({ maze, visited, path }) {

    const [grid, setGrid] = useState([]);

    useEffect(() => {
        const copy = maze.map(row => [...row]);
        let i = 0;
        let visitInterval;
        let pathInterval;

        visitInterval = setInterval(() => {
            if (i < visited.length) {
            const [r, c] = visited[i];
            if (copy[r][c] !== 'S' && copy[r][c] !== 'G') copy[r][c] = 'v';
            setGrid(copy.map(row => [...row]));
            i++;
            } else {
            clearInterval(visitInterval);

            let j = 0;
            pathInterval = setInterval(() => {
                if (j < path.length) {
                const [r, c] = path[j];
                if (copy[r][c] !== 'S' && copy[r][c] !== 'G') copy[r][c] = '*';
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

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${maze[0].length}, 20px)` }}>
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            style={{
              width: 20,
              height: 20,
              border: "1px solid #ccc",
              backgroundColor:
                cell === "#" ? "black" :
                cell === "S" ? "green" :
                cell === "G" ? "red" :
                cell === "v" ? "yellow" :
                cell === "*" ? "lime" : "white"
            }}
          />
        ))
      )}
    </div>
  )
}

export default MazeGrid