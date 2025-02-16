const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

console.log(input[0].split('-').map((val)=>val[0]).join(''))