const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const [S, E] = input[1].split(" ").map(Number)
const graph = Array.from({ length: N + 1 }, () => [])
const visited = Array.from({ length: N + 1 }, () => 0)

input.slice(2).forEach((row) => {
  const [x, y] = row.split(" ").map(Number)
  graph[x].push(y)
  graph[y].push(x)
})

// for (let i = 1; i <= N; i++) {
//   graph[i].sort((a, b) => b - a)
// }

const bfs = () => {
  const queue = [S]
  let index = 0
  visited[S] = 1

  while (queue.length > index) {
    const curr = queue[index++]
    for (let next of [curr + 1, curr - 1]) {
      if (next < 1 || next > N) continue
      if (visited[next]) continue
      queue.push(next)
      visited[next] = visited[curr] + 1
    }
    for (let next of graph[curr]) {
      if (next < 1 || next > N) continue
      if (visited[next]) continue
      queue.push(next)
      visited[next] = visited[curr] + 1
    }
  }
}
bfs()
console.log(visited[E] - 1)

// 1부터 N까지의 각 점
// 현재 위치가 X면 X+1, X-1, X에 위치한 텔레포트와 연결된 지점으로 이동 가능
// 각 행동은 1초 소모

// 텔레포트는 양방향!

// 주예는 S, 방주는 E
// S -> E
// S < E || S > E
