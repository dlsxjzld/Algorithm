
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const [n,m] = input[0].split(' ').map(Number)
  const memo = new Map( input.slice(1,1+n).map((row)=>row.split(' ')))

  input.slice(1+n).forEach((id)=> console.log(memo.get(id)))