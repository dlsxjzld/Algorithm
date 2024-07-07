const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const [x,y] = input[0].split(' ')
  
  const result = Number((Number(x.split('').reverse().join('')) + Number(y.split('').reverse().join(''))).toString().split('').reverse().join(''))
  console.log(result)