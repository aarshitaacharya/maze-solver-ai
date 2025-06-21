from collections import deque

def bfs(maze):
    rows, cols = len(maze), len(maze[0])

    # first we need to find start and goal points

    for r in range(rows):
        for c in range(cols):
            if maze[r][c] == 'S':
                start = (r,c)
            if maze[r][c] == 'G':
                goal = (r,c)
    
    queue = deque([start])
    visited = set([start])
    came_from = {}

    directions = [(-1,0), (1,0), (0, -1), (0, 1)]
    
    while queue:
        current = queue.popleft()
        if current == goal:
            break

        for dr, dc in directions:
            nr, nc = current[0] + dr, current[1] + dc
            neighbor = (nr, nc)

            if(0 <= nr < rows and 0 <= nc < cols and
               maze[nr][nc] in {'.', 'G'} and
               neighbor not in visited):
                visited.add(neighbor)
                came_from[neighbor] = current
                queue.append(neighbor)
    
    path = []
    node = goal
    while node != start:
        path.append(node)
        node = came_from.get(node)
        if node is None:
            return []
    
    path.append(start)
    path.reverse()
    return path
