class Graph {
    constructor() {
        this.list = {};
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set();
        }
    }

    addEdges(v1, v2) {
        if (!this.list[v1]) this.addVertex(v1);
        if (!this.list[v2]) this.addVertex(v2);

        this.list[v1].add(v2);
        this.list[v2].add(v1);
    }

    removeVertex(v1) {
        if (!this.list[v1]) return;

        for (let vertex in this.list) {
            this.removeEdge(vertex, v1);
        }

        delete this.list[v1];
    }

    removeEdge(v1, v2) {
        this.list[v1].delete(v2);
        this.list[v2].delete(v1);
    }

    hasEdge(v1, v2) {
        return this.list[v1].has(v2) && this.list[v2].has(v1);
    }

    print() {
        for (let vertex in this.list) {
            console.log(vertex + " ->  " + [...this.list[vertex]]);
        }
    }

    bfs(startVertex) {
        const visited = {};
        const queue = [];

        queue.push(startVertex);
        visited[startVertex] = true;

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (let neighbor of this.list[currentVertex]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }

    dfs(startVertex) {
        const visited = {};

        this.dfsHelper(startVertex, visited);
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        for (let neighbor of this.list[vertex]) {
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);
            }
        }
    }
}

// Example usage:
const graph = new Graph();

graph.addVertex('a');
graph.addVertex('h');
graph.addEdges('a', 'b');
graph.addEdges('e', 'f');
graph.addEdges('a', 'e');

graph.print();

console.log('BFS traversal:');
graph.bfs('a');

console.log('DFS traversal:');
graph.dfs('a');
