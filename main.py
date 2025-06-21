from utils.maze_loader import load_maze
from algorithms.bfs import bfs
from algorithms.dfs import dfs
from algorithms.astar import astar

maze = load_maze("./mazes/maze1.txt")
# path = bfs(maze)
# path = dfs(maze)
path = astar(maze)

for r, c in path:
    if maze[r][c] not in {'S', 'G'}:
        maze[r][c] = '*'

for row in maze:
    print(''.join(row))