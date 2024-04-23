let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
input = input.map((row) => row.split(" "));

const virus = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    input[i][j] = Number(input[i][j]);
    if (input[i][j] === 2) {
      input[i][j] = 0;
      virus.push([i, j]);
    }
  }
}

const bfs = (q) => {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const arr = new Array(N).fill().map((_, idx) => [...input[idx]]);
  q.forEach(([a, b]) => {
    arr[a][b] = 1;
  });

  while (q.length) {
    const [y, x] = q.shift();
    const now = arr[y][x];
    for (let d = 0; d < 4; d++) {
      const ty = y + dy[d];
      const tx = x + dx[d];
      if (ty < 0 || N <= ty || tx < 0 || N <= tx || arr[ty][tx]) continue;
      arr[ty][tx] = now + 1;
      q.push([ty, tx]);
    }
  }

  let ans = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) {
        return Infinity;
      }
      if (arr[i][j] > ans) ans = arr[i][j];
    }
  }
  return ans - 1;
};

let minTime = Infinity;
const virusLen = virus.length;
const pickVirus = (vi, q) => {
  if (q.length === M) {
    const result = bfs(q);
    if (result < minTime) minTime = result;
    return;
  }

  if (vi === virusLen) return;
  pickVirus(vi + 1, [...q, virus[vi]]);
  pickVirus(vi + 1, q);
};

pickVirus(0, []);

if (minTime == Infinity) console.log(-1);
else console.log(minTime);