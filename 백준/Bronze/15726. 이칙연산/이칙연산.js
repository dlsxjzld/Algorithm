const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [a,b,c] = input[0].split(' ').map(Number)
 console.log(Math.max(Math.floor(a/b*c), Math.floor(a*b/c)))