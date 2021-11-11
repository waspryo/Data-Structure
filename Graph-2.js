class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    console.log(node);
    this.nodes[node] = [];
  }

  addEdge(source, destination) {
    if (!this.nodes[source] || !this.nodes[destination]) {
      return false;
    }

    if (!this.nodes[source].includes(destination)) {
      this.nodes[source].push(destination);
    }

    if (!this.nodes[destination].includes(source)) {
      this.nodes[destination].push(source);
    }
  }

  showNodes() {
    console.log(this.nodes);
  }

  bfs(source, destination) {
    const queue = [source];
    const visited = {};

    while (queue.length) {
      let current = queue.shift();
      if (visited[current]) {
        continue;
      }
      if (current === destination) {
        return true;
      }
      visited[current] = true;
      let neighbor = this.nodes[current];
      for (let i = 0; i < neighbor.length; i++) {
        queue.push(neighbor[i]);
      }
    }
    return false;
  }

  dfs(source, destination, visited = {}) {
    if (visited[source]) {
      return false;
    }

    if (source === destination) {
      return true;
    }
    visited[source] = true;

    const neighbors = this.nodes[source];
    for (let i = 0; i < neighbors.length; i++) {
      if (this.dfs(neighbors[i], destination, visited)) {
        return true;
      }
    }
    return false;
  }
}

let g = new Graph();

g.addNode("Vova");
g.addNode("Tim");
g.addNode("John");
g.addNode("Ann");
g.addNode("Lee");
g.addNode("Ron");
g.addNode("Jeff");

g.addEdge("Tim", "Vova");
g.addEdge("Tim", "Ann");
g.addEdge("Tim", "Lee");
g.addEdge("Ann", "John");
g.addEdge("Ann", "Lee");
g.addEdge("Ron", "Lee");
g.addEdge("Ron", "Jeff");

g.showNodes();
// console.log(g.bfs("Tim", "Jeff"));
console.log(g.dfs("Tim", "Jeff"));
