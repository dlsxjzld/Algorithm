const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const [n, m, r] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

graph.forEach((line) => line.sort((a, b) => a - b));

const visited = new Array(n + 1).fill(0);

let dep = 1;
function dfs(cur) {
    visited[cur] = true;
    visited[cur] = dep;

    for (const next of graph[cur]) {
        if (!visited[next]) {
            dep++;
            dfs(next);
        }
    }
}

dfs(r);

console.log(visited.slice(1).join("\n"));