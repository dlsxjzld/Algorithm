// 0은 이동 가능
// 1은 이동 부락

// 최단거리 구하기
// 시작하는 칸과 끝나는 칸 포함
// (1,1 -> N,M) -> (0,0 -> N-1,M-1)

// 벽을 1개까지 부수고 갈 수 있다.
// 안 부수고도 갈 수 있다.
// 벽을 부순 경우, 안 부순 경우
// 만약 벽을 부쉈다면, 다음 이동할 때는 벽 안 부수기만 선택 가능
// 벽을 안 부쉈다면, 다음 이동할 때 선택 가능 -> 벽 부수기, 벽 안 부수기

// 이것 때문에 dfs로 선택했는데, dfs는 깊이 우선 탐색이므로 최단 거리를 풀 때 쓰면 안된다.
// 최단거리 문제는 bfs로 풀어야 시간초과가 나지 않는다.

// 그렇다면 매 선택에 따라 벽을 부순 맵과 벽을 부수지 않은 맵이 달라질텐데 어떻게 해야 bfs에서도 가능할까?
// 답은 3차원 배열이다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((row) => row.split('').map(Number));
let answer = Number.MAX_SAFE_INTEGER;

const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => Array.from({ length: 2 }, () => 0)));
// visited[x][y][0] -> 만약 0이면 미방문 상태
// visited[x][y][1] -> 만약 0이면 미방문 상태

// 벽을 부수지 않은 상태면 visited[x][y][1]에 접근 가능

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = () => {
  const queue = [[0, 0, 0]]; // x,y, broken(부숨 여부)
  let index = 0;
  visited[0][0][0] = 1;

  while (queue.length > index) {
    const [x, y, broken] = queue[index++];

    for (let [dx, dy] of move) {
      const [nx, ny] = [x + dx, y + dy];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      // 같은 상태에서 같은 곳을 온다면, 이전으로 다시 가면 안됨

      if (graph[nx][ny] === 0) {
        // 길이라면
        if (visited[nx][ny][0] === 0 && broken === 0) {
          // 벽을 부순 채로 온 거
          visited[nx][ny][0] = visited[x][y][0] + 1;
          queue.push([nx, ny, broken]);
        }
        if (visited[nx][ny][1] === 0 && broken === 1) {
          visited[nx][ny][1] = visited[x][y][1] + 1;
          queue.push([nx, ny, broken]);
        }
      } else if (graph[nx][ny] === 1 && broken === 0) {
        // 벽이라면
        if (visited[nx][ny][1] === 0) {
          visited[nx][ny][1] = visited[x][y][0] + 1;
          queue.push([nx, ny, 1]);
        }
      }
      // 벽을 부순 상태
      // 벽을 부수지 않은 상태
    }
  }
};

bfs();

const dist0 = visited[n - 1][m - 1][0]; // 벽 안 부수고 도착 거리
const dist1 = visited[n - 1][m - 1][1]; // 벽 1개 부수고 도착 거리

if (dist0 > 0 && dist1 > 0) {
  // 둘 다 도달한 경우: 최솟값 출력
  console.log(Math.min(dist0, dist1));
} else if (dist0 > 0) {
  // '안 부수고'만 도달한 경우
  console.log(dist0);
} else if (dist1 > 0) {
  // '부수고'만 도달한 경우
  console.log(dist1);
} else {
  // 둘 다 도달 못한 경우
  console.log(-1);
}