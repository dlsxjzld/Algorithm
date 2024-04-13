const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const result = input[0].split('').map(ch => ch==ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()).join('');
console.log(result);