def load_maze(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
        maze = [list(line.strip()) for line in lines]
    return maze