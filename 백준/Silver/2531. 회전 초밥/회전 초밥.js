const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, d, k, c] = input[0].split(" ").map(Number)
const sushi = input.slice(1).map(Number)
const kind = {}
let answer = Number.MIN_SAFE_INTEGER
let cnt = 0

for (let i = 0; i < k; i++) {
  if (!kind[sushi[i]]) {
    kind[sushi[i]] = 0
    cnt += 1
  }
  kind[sushi[i]] += 1
}
if (!kind[c]) {
  kind[c] = 0
  cnt += 1
}
kind[c] += 1
answer = Math.max(answer, cnt)

for (let i = 1; i < N; i++) {
  kind[sushi[i - 1]] -= 1
  if (kind[sushi[i - 1]] == 0) {
    cnt -= 1
  }
  if (!kind[sushi[(i + k - 1) % N]]) {
    kind[sushi[(i + k - 1) % N]] = 0
    cnt += 1
  }
  kind[sushi[(i + k - 1) % N]] += 1

  answer = Math.max(answer, cnt)
}

console.log(answer)
