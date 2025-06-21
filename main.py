from utils.maze_loader import load_maze
from algorithms.bfs import bfs

maze = load_maze("./mazes/maze1.txt")
path = bfs(maze)

for r, c in path:
    if maze[r][c] not in {'S', 'G'}:
        maze[r][c] = '*'

for row in maze:
    print(''.join(row))