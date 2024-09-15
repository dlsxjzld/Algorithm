const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const x = input[0].split(' ').map(Number).reduce((a,b)=>a+b)
const y = input[1].split(' ').map(Number).reduce((a,b)=>a+b)
console.log(Math.max(x,y))