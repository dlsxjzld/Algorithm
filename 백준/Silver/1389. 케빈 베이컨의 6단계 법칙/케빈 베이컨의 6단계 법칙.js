const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const edges = input.slice(1).map((row) => row.split(' ').map(Number));

const board = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER));

for (let [s, e] of edges) {
  board[s][e] = 1;
  board[e][s] = 1;
}

for (let i = 1; i <= n; i += 1) {
  board[i][i] = 0;
}

for (let k = 1; k <= n; k += 1) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (i === j) {
        continue;
      }
      board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
    }
  }
}

const newBoard = board.slice(1).map((row) => row.slice(1));
const sums = newBoard.map((row) => row.reduce((a, b) => a + b));
const MIN = Math.min(...sums);
console.log(sums.indexOf(MIN) + 1);
