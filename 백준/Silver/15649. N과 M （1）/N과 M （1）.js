const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const array = []
const visited = Array.from({ length: N + 1 }, () => false)
const answer = []
const backTracking = (array, visited) => {
  if (array.length == M) {
    answer.push(array.join(" "))
    return
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      array.push(i)
      visited[i] = true
      backTracking(array, visited)
      visited[i] = false
      array.pop()
    }
  }
}

backTracking(array, visited)
console.log(answer.join('\n'))
