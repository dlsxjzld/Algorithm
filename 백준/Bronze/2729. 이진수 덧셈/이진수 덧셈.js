const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const t = Number(input[0])
for (let i = 1; i < t + 1; i++) {
  let [n, m] = input[i].split(" ").map(x=>BigInt('0b'+x))
  
  console.log((n+m).toString(2))
}
