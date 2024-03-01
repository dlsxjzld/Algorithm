const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const n = Number( input[0])/4
  console.log('long '.repeat(n) +'int')
  