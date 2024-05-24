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
const visited = Array.from({ length: 100001 }, () => 0) // 각 위치마다 걸리는 시간

let cnt = 0

const check = (start) => {
  const queue = [start]
  let index = 0
  visited[start] = 0

  while (queue.length > index) {
    const curr = queue[index++]
    if (curr == k) {
      cnt += 1
      continue
    }

    for (let nx of [curr + 1, curr - 1, curr * 2]) {
      if (nx >= 0 && nx <= 100000 && nx !== n) {
        if (visited[nx] === 0 || visited[nx] === visited[curr] + 1) {
          visited[nx] = visited[curr] + 1
          queue.push(nx)
        }
      }
    }
  }
}
check(n)

console.log(visited[k])
console.log(cnt)
