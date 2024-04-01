const [N, ...edges] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const graph = Array.from({ length: +N + 1 }).map(() => []);
const checked = Array.from({ length: +N + 1 }).fill(false);
const parentNodes = Array.from({ length: +N + 1 }).fill(null);

edges.forEach(edge => {
  const [start, end] = edge.split(' ');

  graph[start].push(+end);
  graph[end].push(+start);
});

const dfsSearchForParent = vertex => {
  if (checked[vertex]) return;

  checked[vertex] = true;

  graph[vertex].forEach(child => {
    if (!checked[child]) parentNodes[child] = vertex;

    dfsSearchForParent(child);
  });
};

dfsSearchForParent(1);

let answer = '';

for (let i = 2; i < parentNodes.length; i++) {
  answer += parentNodes[i] + '\n';
}

console.log(answer);