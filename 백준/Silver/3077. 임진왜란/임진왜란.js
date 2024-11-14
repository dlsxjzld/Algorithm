const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const realAnswer = input[2].split(" ")

const indexInfo = {}

for (let [index, ans] of realAnswer.entries()) {
  indexInfo[ans] = index
}
const myAnswer = input[1].split(" ").map((val) => indexInfo[val])
const visited = Array.from({ length: N }, () => false)
let answer = 0
const dfs = (start, visited, array) => {
  if (array.length === 2) {
    if (array[0] < array[1]) {
      answer += 1
    }
    return
  }
  for (let i = start; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true
      array.push(myAnswer[i])
      dfs(i + 1, visited, array)
      visited[i] = false
      array.pop()
    }
  }
}
const array = []

for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    visited[i] = true
    array.push(myAnswer[i])
    dfs(i + 1, visited, array)
    visited[i] = false
    array.pop()
  }
}

console.log(`${answer}/${parseInt((N * (N - 1)) / 2, 10)}`)
