def dfs(maze):
    rows, cols = len(maze), len(maze[0])

    for r in range(rows):
        for c in range(cols):
            if maze[r][c] == 'S':
                start = (r,c)
            if maze[r][c] == 'G':
                goal = (r,c)
    
    visited = set()
    visited_order = []
    came_from = {}
    found = [False]
    
    directions = [(-1,0), (1,0), (0,-1), (0,1)]

    def dfs_visit(current):
        if current == goal:
            found[0] = True
            return
        
        visited.add(current)
        visited_order.append(current)
        for dr, dc in directions:
            nr, nc = current[0] + dr, current[1] + dc
            neighbor = (nr, nc)

            if(0 <= nr < rows and 0<= nc <cols and
               maze[nr][nc] in {'.', 'G'} and neighbor not in visited):
                came_from[neighbor] = current
                dfs_visit(neighbor)
                if found[0]: return
        
    dfs_visit(start)

    if not found[0]:
        return [], visited_order
    
    path = []
    node = goal
    while node != start:
        path.append(node)
        node = came_from.get(node)
        if node is None:
            return [], visited_order
    path.append(start)
    path.reverse()
    return path, visited_order