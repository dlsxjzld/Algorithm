// 두번째 코드
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)

const graph = Array(100001).fill(-1)
graph[n] = 0

const bfs = (start) => {
  const queue = [start]
  let index = 0

  while (queue.length > index) {
    const curr = queue[index++]

    for (let next of [curr - 1, curr + 1, curr * 2]) {
      if (next < 0 || next > 100000) continue
      
      if (graph[next] != -1) { // 이미 방문을 했었다면
        if (next === curr * 2) { // next가 curr*2 일 때
        // 방문을 했다면 값이 더 작을 때 갱신해야 하므로 조건문 추가
          if (graph[next] > graph[curr]) { 
            queue.push(next)
            graph[next] = graph[curr]
          }
        } else { // next가 curr-1, curr+1 일 때
          if (graph[next] > graph[curr] +1) {
            queue.push(next)
            graph[next] = graph[curr] + 1
          }
        }
      } else { // 방문을 안했다면
        if (next === curr * 2) {
          queue.push(next)
          graph[next] = graph[curr]
        } else {
          queue.push(next)
          graph[next] = graph[curr] + 1
        }
      }
    }
  }
}

bfs(n)

console.log(graph[k])
