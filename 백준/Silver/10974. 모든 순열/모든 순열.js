const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

// const array = Array.from({length:n},(idx)=>idx+1)
const visited = Array.from({ length: n + 1 }, () => false)

const dfs = (array) => {
  if (array.length === n) {
    console.log(array.join(" "))
    return
  }
  for (let i = 1; i < n + 1; i++) {
    if (!visited[i]) {
      visited[i] = true
      dfs([...array, i])
      visited[i] = false
    }
  }
}

for (let idx = 1; idx < n + 1; idx++) {
  visited[idx] = true
  dfs([idx])
  visited[idx] = false
}
