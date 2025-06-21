import heapq

def manhattan(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def astar(maze):
    rows, cols = len(maze), len(maze[0])

    for r in range(rows):
        for c in range(cols):
            if maze[r][c] == 'S':
                start = (r,c)
            if maze[r][c] == 'G':
                goal = (r,c)
    
    open_set = []
    heapq.heappush(open_set, (0, start))

    came_from ={}
    g_score = {start: 0}
    visited = set()
    visited_order = []

    directions = [(-1,0), (1,0), (0,-1), (0,1)]

    while open_set:
        _, current = heapq.heappop(open_set)

        if current == goal:
            break

        if current in visited:
            continue
        
        visited.add(current)
        visited_order.append(current)

        for dr, dc in directions:
            nr, nc = current[0] + dr, current[1] + dc
            neighbor = (nr, nc)

            if(0 <= nr < rows and 0<= nc <cols 
               and maze[nr][nc] in {'.', 'G'}):
                tentative_g = g_score[current] + 1

                if neighbor not in g_score or tentative_g < g_score[neighbor]:
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g +manhattan(neighbor, goal)
                    heapq.heappush(open_set, (f_score, neighbor))
                    came_from[neighbor] = current
                
    
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
