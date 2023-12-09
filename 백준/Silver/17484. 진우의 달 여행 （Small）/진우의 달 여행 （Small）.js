const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 1. 지구 -> 달로 가는 경우 우주선이 움직일 수 있는 방향은 아래와 같다.
// 2. 우주선은 전에 움직인 방향으로 움직일 수 없다. 즉, 같은 방향으로 두번 연속으로 움직일 수 없다.
// 3. 연료를 최대한 아끼며 지구의 어느위치에서든 출발하여 달의 어느위치든 착륙하는 것
const MAX = Number.MAX_SAFE_INTEGER;
const [n, m] = input[0].split(' ').map(Number);
const distance = [
    Array.from({ length: m }, () => 0),
  ...input.slice(1, 1 + n).map((row) => row.split(' ').map(Number)),
];


const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m }, () => Array.from({ length: 3 }, () => MAX))
);

const direction = [
  [-1, 1],
  [-1, 0],
  [-1, -1],
]; // 남서, 남, 남동

for (let i = 0; i < m; i++) {
  for (let j = 0; j < 3; j++) {
    dp[0][i][j] = 0;
  }
}

for (let x = 1; x < n + 1; x++) {
  for (let y = 0; y < m; y++) {
    for (let idx = 0; idx < 3; idx++) {
      const prevX = x + direction[idx][0];
      const prevY = y + direction[idx][1];

      if (prevY < 0 || prevY >= m) {
        dp[x][y][idx] = MAX;
        continue;
      }
      dp[x][y][idx] =
        distance[x][y] +
        Math.min(
          dp[prevX][prevY][(idx + 1) % 3],
          dp[prevX][prevY][(idx + 2) % 3]
        );
    }
  }
}

console.log(Math.min(...dp[n].flat()));
