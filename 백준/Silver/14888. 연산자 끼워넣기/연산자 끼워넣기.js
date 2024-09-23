const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const numbers = input[1].split(" ").map(Number) // 수
const operands = input[2].split(" ").map(Number) // + - * /

let MAX = Number.MIN_SAFE_INTEGER // 최대값 갱신을 위해 가장 작은 값을 할당
let MIN = Number.MAX_SAFE_INTEGER // 최소값 갱신을 위해 가장 큰 값을 할당

const dfs = (cnt, plus, minus, multi, divide, total) => {
  if (cnt === 0) {
    MAX = Math.max(MAX, total)
    MIN = Math.min(MIN, total)
    return
  }
  if (plus > 0) {
    dfs(cnt - 1, plus - 1, minus, multi, divide, total + numbers[n - cnt])
  }
  if (minus > 0) {
    dfs(cnt - 1, plus, minus - 1, multi, divide, total - numbers[n - cnt])
  }
  if (multi > 0) {
    dfs(cnt - 1, plus, minus, multi - 1, divide, total * numbers[n - cnt])
  }
  if (divide > 0) {
    dfs(
      cnt - 1,
      plus,
      minus,
      multi,
      divide - 1,
      total < 0
        ? -Math.floor(-total / numbers[n - cnt])
        : Math.floor(total / numbers[n - cnt]),
    )
  }
}
dfs(n - 1, operands[0], operands[1], operands[2], operands[3], numbers[0])
console.log(MAX == 0 ? 0 : MAX)
console.log(MIN == 0 ? 0 : MIN)