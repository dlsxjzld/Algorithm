const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)

const SET = new Set(input.slice(1,1+n))
const problems = input.slice(1+n)

console.log(problems.filter((problem)=>SET.has(problem)).length)