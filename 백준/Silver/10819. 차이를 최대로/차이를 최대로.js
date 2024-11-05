const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

const visited = Array.from({ length: n }, () => false)
let result = [];
let maxValue = 0;
dfs(0);

function dfs(depth){
  if(depth === n){
    let current = 0;
    for(let i = 0; i < n - 1; i++) current += Math.abs(result[i] - result[i + 1]);
    maxValue = Math.max(maxValue, current);
  }
  for(let i = 0; i < n; i++){
    if(visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}
console.log(maxValue);
