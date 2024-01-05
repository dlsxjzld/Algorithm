const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [l, c] = input[0].split(" ").map(Number)
const alphabet = input[1].split(" ").sort()
const visited = Array.from({ length: c }, () => false)
const 모음 = "aeiou"
const Composition = []

function dfs(array, startIdx) {
  if (array.length === l) {
    let moCnt = array.filter((alpha) => 모음.includes(alpha)).length // 모음 수
    let jaCnt = l - moCnt

    if (moCnt >= 1 && jaCnt >= 2) {
      Composition.push(array.join(''))
    }
    return
  }
  for (let i = startIdx; i < c; i++) {
    if (!visited[i]) {
      visited[i] = true
      dfs([...array, alphabet[i]], i)
      visited[i] = false
    }
  }
}

for (let i = 0; i < c; i++) {
  if (!visited[i]) {
    visited[i] = true
    dfs([alphabet[i]], i)
    visited[i] = false
  }
}
Composition.forEach((str)=>console.log(str))

