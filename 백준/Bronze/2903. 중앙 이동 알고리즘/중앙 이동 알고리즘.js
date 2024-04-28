const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
let N = Number(input[0]);
let dot = 2;
for(let i=0; i<N; i++){
    dot += Math.pow(2, i);
};
console.log(Math.pow(dot, 2))