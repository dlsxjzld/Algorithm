const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = input.slice(1).map(Number)
result.sort((a,b)=>b-a)
console.log(result.join('\n'))