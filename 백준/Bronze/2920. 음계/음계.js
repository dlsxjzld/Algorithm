const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const asc = `1 2 3 4 5 6 7 8`
const des = `8 7 6 5 4 3 2 1`

console.log(input[0] === asc ? 'ascending' : input[0] === des ? 'descending' : 'mixed')