const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const [n,m] = input[0].split(' ').map(Number)
  const A = input.slice(1,1+n).map(row => row.split(' ').map(Number))
  const B = input.slice(1+n).map(row => row.split(' ').map(Number))
  
  const answer = A.map((row,ridx)=> (row.map((val,cidx)=>(val+B[ridx][cidx]))))
  
  console.log(answer.map(row=>row.join(' ')).join('\n'))