const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

const visited = Array.from({ length: n }, () => false)
let MAX = Number.MIN_SAFE_INTEGER

const dfs = (array, visited, targetLength) => {
  if (array.length === targetLength) {

    let sum = 0
    for(let i =0;i<array.length-1;i++){
      sum += Math.abs(array[i] - array[i+1])
    }
    MAX = Math.max(MAX,sum)
    return
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true
      dfs([...array, arr[i]], visited, targetLength)
      visited[i] = false
    }
  }
}


for (let i = 0; i < n; i++) {
  if (!visited[i]) {
    visited[i] = true
    dfs([arr[i]], visited, n)
    visited[i] = false
  }
}
console.log(MAX)
