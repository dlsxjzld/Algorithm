const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 수빈이 n
// 동생 k
// n<k || n>k || n==k

// x-1, x+1, 2*x
// 1초 걸림

// 가장 빠른 시간은 몇 초?
// 가장 빠른 시간으로 찾는 방법이 몇 가지?

const [n, k] = input[0].split(" ").map(Number)

const solution = (n, k) => {
  const MAX = 100_001
  const visited = Array(MAX).fill(0)
  const queue = [n]
  let index = 0
  visited[n] = 1

  let cnt = 0

  while (queue.length > index) {
    const curr = queue[index++]

    if (curr === k) {
      cnt += 1
      continue
    }

    for (let next of [curr + 1, curr - 1, curr * 2]) {
      if (next < 0 || next >= MAX) continue
      if (visited[next] === 0 || visited[next] === visited[curr] + 1) {
        visited[next] = visited[curr] + 1
        queue.push(next)
      }
    }
  }
  return [visited[k]-1, cnt]
}

const answer = solution(n,k)
console.log(answer.join("\n"))
