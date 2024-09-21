const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [a,b] = input[0].split(' ').map(BigInt)
console.log((a*b).toString())