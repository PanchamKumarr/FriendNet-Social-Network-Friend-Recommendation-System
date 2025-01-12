// graph.js
class Graph {
    constructor() {
        this.graph = {};
    }

    addNode(node) {
        if (!this.graph[node]) {
            this.graph[node] = [];
        }
    }

    addEdge(node1, node2) {
        if (this.graph[node1]) {
            this.graph[node1].push(node2);
        }
        if (this.graph[node2]) {
            this.graph[node2].push(node1);
        }
    }

    getNeighbors(node) {
        return this.graph[node] || [];
    }

    // BFS - Breadth First Search
    bfs(startNode) {
        let visited = new Set();
        let queue = [startNode];
        visited.add(startNode);

        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            let neighbors = this.getNeighbors(node);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    // DFS - Depth First Search
    dfs(startNode) {
        let visited = new Set();
        this.dfsHelper(startNode, visited);
    }

    dfsHelper(node, visited) {
        visited.add(node);
        console.log(node);
        let neighbors = this.getNeighbors(node);
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfsHelper(neighbor, visited);
            }
        }
    }

    // Dijkstra's Algorithm for Shortest Path
    dijkstra(startNode) {
        let distances = {};
        let visited = new Set();
        let pq = new MinPriorityQueue();

        for (let node in this.graph) {
            distances[node] = Infinity;
        }
        distances[startNode] = 0;
        pq.enqueue(startNode, 0);

        while (!pq.isEmpty()) {
            let { element: node } = pq.dequeue();
            visited.add(node);

            let neighbors = this.getNeighbors(node);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    let newDist = distances[node] + 1; // assuming all edges have equal weight
                    if (newDist < distances[neighbor]) {
                        distances[neighbor] = newDist;
                        pq.enqueue(neighbor, newDist);
                    }
                }
            }
        }

        return distances;
    }
}
