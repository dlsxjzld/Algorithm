const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const l = Number(input[0])
const letter = input[1].split('')

console.log(letter.map((val,idx)=>((val.charCodeAt()-96) * (31 ** idx) )).reduce((prev,cur)=>prev+cur,0) % 1234567891) 