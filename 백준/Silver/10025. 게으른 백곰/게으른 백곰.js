const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [n, k] = input[0].split(" ").map(Number)

// 총 N(1 ≤ N ≤ 100000)개의 얼음 양동이들
// xi(0 ≤ xi ≤ 1,000,000)좌표마다 놓여 있고
// 각 양동이 안에는 gi(1 ≤ gi ≤ 10,000)씩의 얼음이 들어 있다.
// 일단 앨버트가 자리를 잡으면 그로부터 좌우로 K(1 ≤ K ≤ 2,000,000) 만큼 떨어진 양동이까지 닿을 수 있다.

const ices = Array.from({ length: 1_000_001 }, () => 0)
for (let i = 1; i <= n; i += 1) {
  const [g, x] = input[i].split(" ").map(Number)
  ices[x] = g
}

let answer = 0
if (k >= 500_000) {
  answer = ices.reduce((a, b) => a + b, 0)
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