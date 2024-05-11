const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const [a,b] = input[0].split(' ').map(Number)
  console.log((a+b) * (a-b))