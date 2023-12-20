const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const [start, end] = input[1].split(' ').map(Number);
const m = Number(input[2]);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

const relation = input.slice(3, 3 + m).map((row) => row.split(' ').map(Number));
relation.forEach(([x, y]) => {
  graph[x].push(y);
  graph[y].push(x);
});

let answer = Infinity;
function dfs(dest, cnt) {
  if (dest === end) {
    answer = Math.min(answer, cnt);
    return;
  }
  for (let related of graph[dest]) {
    if (!visited[related]) {
      visited[related] = true;
      dfs(related, cnt + 1);
      visited[related] = false;
    }
  }
}

visited[start] = true;
dfs(start, 0);

console.log(answer !== Infinity ? answer : -1);
