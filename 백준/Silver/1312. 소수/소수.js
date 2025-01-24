const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [a,b,n] = input[0].split(' ').map(Number)

let result = a % b;

for(let i = 0; i < n-1; i++){
    result *= 10;
    result %= b;
};

result *= 10;

console.log(Math.floor(result/b));