from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.maze_loader import load_maze
from algorithms.bfs import bfs
from algorithms.dfs import dfs
from algorithms.astar import astar
import os

app = Flask(__name__)
CORS(app)

@app.route("/api/solve", methods =["POST"])
def solve():
    data = request.json
    maze_id = data["maze"]
    algorithm = data["algorithm"]

    maze = load_maze(f"mazes/{maze_id}.txt")

    if algorithm == "bfs":
        path, visited = bfs(maze)
    elif algorithm == "dfs":
        path, visited = dfs(maze)
    elif algorithm == "astar":
        path, visited = astar(maze)
    else:
        return jsonify({"error": "Unknown algorithm"}), 400

    return jsonify({
        "path": path,
        "visited": visited
    })

@app.route("/api/maze")
def get_maze():
    name = request.args.get("name", "maze1")
    maze = load_maze(f"mazes/{name}.txt")

    return jsonify({"maze": maze})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)