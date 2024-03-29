const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const answer = input[1].split(' ').concat(input[2].split(' ')).sort((a,b)=>a-b)
  console.log(answer.join(' '))