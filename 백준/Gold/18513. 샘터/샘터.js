const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const pools = input[1].split(" ").map((val) => Number(val))

const visited = new Set()
for (let pool of pools) {
  visited.add(pool)
}

// 집들을 k개 설치하고 -> n개의 샘터 확인하면서 최솟값 구하기?

const bfs = (pools) => {
  const tmp = pools.map((val) => [val, val])
  const queue = [...tmp]
  let index = 0
  let answer = 0
  let rest = k

  while (queue.length > index) {
    const [cur, origin] = queue[index++]

    for (let nx of [cur - 1, cur + 1]) {
      if (visited.has(nx) || rest === 0) {
        continue
      }
      visited.add(nx)
      answer += Math.abs(nx - origin)
      rest -= 1
      queue.push([nx, origin])
    }
  }
  return answer
}

console.log(bfs(pools))
