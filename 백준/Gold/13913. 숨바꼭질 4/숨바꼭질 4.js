const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const MAX = 100001
const time = Array.from({ length: MAX }, () => -1)
const path = Array.from({ length: MAX }, () => Number.MAX_SAFE_INTEGER)

time[n] = 0

const bfs = () => {
  const queue = [n]
  let index = 0

  while (queue.length > index) {
    const curr = queue[index++]
    for (let next of [curr - 1, curr + 1, curr * 2]) {
      if (next < 0 || next >= MAX || time[next] !== -1) {
        continue
      }
      queue.push(next)
      time[next] = time[curr] + 1
      path[next] = curr
    }
  }
}
bfs()
console.log(time[k])
const answer = [k]
let tmp = path[k]
for (let i = 0; i < time[k]; i++) {
  answer.push(tmp)
  tmp = path[tmp]
}

console.log(answer.reverse().join(" "))
