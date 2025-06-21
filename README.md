# 🧩 Maze Solver - Pathfinding Algorithm Visualizer

A modern web application that visualizes AI pathfinding algorithms in action, demonstrating how different traversal techniques solve maze problems with stunning visual feedback.

![Maze Solver Demo](https://img.shields.io/badge/AI-Pathfinding-blue?style=for-the-badge) ![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react) ![Flask](https://img.shields.io/badge/Flask-2.0-000000?style=for-the-badge&logo=flask) ![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite)

## Overview

This project implements and visualizes three fundamental AI search algorithms used in pathfinding and graph traversal. Watch as algorithms explore mazes in real-time, showing how different approaches tackle the same problem with varying strategies and efficiency.

## AI Algorithms Implemented

### 1. **Breadth-First Search (BFS)** 
- **Strategy**: Explores all neighbors at the current depth before moving deeper
- **Guarantee**: Always finds the shortest path (optimal)
- **Time Complexity**: O(V + E) where V = vertices, E = edges
- **Space Complexity**: O(V) for the queue
- **Best For**: Unweighted graphs, guaranteed shortest path

### 2. **Depth-First Search (DFS)**  
- **Strategy**: Explores as far as possible along each branch before backtracking
- **Guarantee**: Finds a solution but not necessarily optimal
- **Time Complexity**: O(V + E)
- **Space Complexity**: O(h) where h = maximum depth
- **Best For**: Memory-efficient exploration, maze generation

### 3. **A* (A-Star) Algorithm** 
- **Strategy**: Uses heuristics to guide search toward the goal intelligently
- **Guarantee**: Optimal if heuristic is admissible (never overestimates)
- **Time Complexity**: O(b^d) where b = branching factor, d = depth
- **Space Complexity**: O(b^d)
- **Best For**: Optimal pathfinding with prior knowledge, game AI, robotics

## Features

- **Real-time Visualization**: Watch algorithms explore step-by-step
- **Multiple Maze Configurations**: Test algorithms on different maze layouts
- **Performance Comparison**: See how each algorithm approaches the same problem
- **Interactive Controls**: Switch between algorithms and mazes dynamically
- **Beautiful UI**: Modern design with smooth animations and visual feedback
- **Educational**: Perfect for learning AI concepts and algorithm behavior

## Tech Stack

### Frontend
- **React 18** with Hooks for state management
- **Vite** for lightning-fast development and building
- **CSS3** with modern animations and gradients
- **Responsive Design** for all device sizes

### Backend
- **Flask** (Python) RESTful API
- **Algorithm Implementations** in pure Python
- **JSON API** for maze data and pathfinding results

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.8+ with pip
- Git

### Frontend Setup (React + Vite)
```bash
# Clone the repository
git clone https://github.com/aarshitaacharya/maze-solver-ai.git
cd maze-solver-ai

# Install frontend dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup (Flask)
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install flask flask-cors numpy

# Start Flask server
python app.py
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5050

## How to Use

1. **Choose a Maze**: Select from pre-built maze configurations
2. **Select Algorithm**: Pick BFS, DFS, or A* to see different approaches
3. **Click Solve**: Watch the algorithm explore the maze in real-time
4. **Compare Results**: Try different algorithms on the same maze to see differences

## Algorithm Behavior Analysis

| Algorithm | Path Quality | Speed | Memory Usage | Use Case |
|-----------|-------------|--------|--------------|----------|
| **BFS** | Optimal |  Slower |  High | Shortest path guarantee needed |
| **DFS** |  Not optimal |  Fast |  Low | Memory-constrained environments |
| **A*** |  Optimal* |  Fast |  Medium | Real-world pathfinding, game AI |

*A* is optimal when using an admissible heuristic

##  Visual Legend

- 🏁 **Green**: Start position
- 🎯 **Red**: Goal/target position  
- ⬛ **Black**: Walls/obstacles
- 🟡 **Yellow**: Visited cells (exploration)
- ✨ **Lime**: Final optimal path
- ⬜ **White**: Unvisited cells


## 🔧 API Endpoints

```
GET  /api/maze?name={maze_name}     # Get maze configuration
POST /api/solve                     # Solve maze with selected algorithm
```

**Request Body for /api/solve:**
```json
{
  "maze": "maze1",
  "algorithm": "bfs"
}
```

**Response:**
```json
{
  "visited": [[0,0], [1,0], ...],
  "path": [[0,0], [1,1], ...],
}
```

## Contributing

Contributions are welcome! Ideas for enhancement:

- Add more algorithms (Dijkstra, Greedy Best-First)
- Implement maze generation algorithms
- Add performance metrics display
- Create custom maze editor
- Add more heuristic functions for A*


## 📄 License

MIT License - feel free to use this project for learning and teaching AI concepts!

## 🌟 Acknowledgments

Built with passion for AI education and algorithm visualization. Perfect for computer science students, educators, and anyone curious about how AI pathfinding works!

---

**⭐ Star this repo if it helped you understand AI pathfinding algorithms!**