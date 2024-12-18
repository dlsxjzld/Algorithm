const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [n, k] = input[0].split(" ").map(Number)

const ices = Array.from({ length: 1_000_001 }, () => 0)
for (let i = 1; i <= n; i += 1) {
  const [g, x] = input[i].split(" ").map(Number)
  ices[x] = g
}

let answer = 0
if (k >= 500_000) {
    for(let i=0;i<=1_000_000;i+=1){
        answer += ices[i]
    }
} else {
  let start = 0

  for (let i = 0; i <= 2 * k; i += 1) {
    start += ices[i]
  }
  answer = Math.max(answer, start)

  for (let i = 1; i <= 1_000_000 - 2 * k; i += 1) {
    start -= ices[i - 1]
    start += ices[i + 2 * k]
    answer = Math.max(answer, start)
  }

}

console.log(answer)