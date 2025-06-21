from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.maze_loader import load_maze
from algorithms.bfs import bfs

app = Flask(__name__)
CORS(app)

@app.route("/api/solve", methods =["POST"])
def solve():
    data = request.json
    maze_id = data["maze"]
    algorithm = data["algorithm"]

    maze = load_maze(f"mazes/{maze_id}.txt")

    if algorithm == "bfs":
        result = bfs(maze)
    else:
        return jsonify({"error": "Unsupported Algorithm"}), 400
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5050)