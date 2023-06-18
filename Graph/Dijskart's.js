class Graph {
    constructor() {
        this.list = {};
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = {};
        }
    }

    addEdge(v1, v2, weight) {
        if (!this.list[v1]) this.addVertex(v1);
        if (!this.list[v2]) this.addVertex(v2);

        this.list[v1][v2] = weight;
        this.list[v2][v1] = weight;
    }

    removeVertex(v1) {
        if (!this.list[v1]) return;

        for (let vertex in this.list) {
            this.removeEdge(vertex, v1);
        }

        delete this.list[v1];
    }

    removeEdge(v1, v2) {
        delete this.list[v1][v2];
        delete this.list[v2][v1];
    }

    hasEdge(v1, v2) {
        return v2 in this.list[v1];
    }

    print() {
        for (let vertex in this.list) {
            console.log(vertex + " ->  " + JSON.stringify(this.list[vertex]));
        }
    }

    dijkstra(startVertex) {
        const distances = {};
        const previous = {};
        const visited = {};

        for (let vertex in this.list) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
            } else {
                distances[vertex] = Infinity;
            }
            previous[vertex] = null;
        }

        while (true) {
            let minDistance = Infinity;
            let closestVertex = null;

            for (let vertex in distances) {
                if (!visited[vertex] && distances[vertex] < minDistance) {
                    minDistance = distances[vertex];
                    closestVertex = vertex;
                }
            }

            if (closestVertex === null) {
                break;
            }

            visited[closestVertex] = true;

            for (let neighbor in this.list[closestVertex]) {
                const distance = distances[closestVertex] + this.list[closestVertex][neighbor];
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    previous[neighbor] = closestVertex;
                }
            }
        }

        return { distances, previous };
    }

    getPath(previous, destination) {
        const path = [];
        let currentVertex = destination;
        while (currentVertex !== null) {
            path.unshift(currentVertex);
            currentVertex = previous[currentVertex];
        }
        return path;
    }
}

// Example usage:
const graph = new Graph();

graph.addVertex('a');
graph.addVertex('h');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');

graph.addEdge('a', 'b', 4);
graph.addEdge('a', 'c', 2);
graph.addEdge('b', 'e', 3);
graph.addEdge('c', 'd', 2);
graph.addEdge('c', 'f', 4);
graph.addEdge('d', 'e', 3);
graph.addEdge('d', 'f', 1);
graph.addEdge('e', 'f', 1);

console.log('Shortest path distances:');
const { distances, previous } = graph.dijkstra('a');
console.log(distances);

console.log('Shortest path from a to f:');
const path = graph.getPath(previous, 'f');
console.log(path.join(' -> '));


console.log(graph.list)
