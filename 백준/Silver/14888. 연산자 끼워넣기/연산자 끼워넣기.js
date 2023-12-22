const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const A = input[1].split(" ").map(Number)
const operand = input[2].split(" ").map(Number)
// answer = [Max, Min]
const answer = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

function dfs(total, cnt, plus, minus, multi, divide) {
  if (cnt === n - 1) {
    // 연산자를 모두 쓰면 answer에 계산된 값 넣기

    // Max 값 갱신
    if (answer[0] < total) {
      answer[0] = total
    }

    // Min 값 갱신
    if (answer[1] > total) {
      answer[1] = total
    }
    return
  }

  // 연산자 갯수 1 증가
  cnt += 1
  if (plus > 0) {
    // plus 연산하면 plus 연산자 1개 줄이기
    dfs(total + A[cnt], cnt, plus - 1, minus, multi, divide)
  }
  if (minus > 0) {
    // minus 연산하면 minus 연산자 1개 줄이기
    dfs(total - A[cnt], cnt, plus, minus - 1, multi, divide)
  }
  if (multi > 0) {
    // multi 연산하면 multi 연산자 1개 줄이기
    dfs(total * A[cnt], cnt, plus, minus, multi - 1, divide)
  }
  if (divide > 0) {
    // divide 연산하면 divide 연산자 1개 줄이기
    // 음수를 양수로 나누게 되면 음수를 양수로
    dfs(
      total < 0
        ? -Math.floor(Math.abs(total) / A[cnt])
        : Math.floor(total / A[cnt]),
      cnt,
      plus,
      minus,
      multi,
      divide - 1,
    )
  }
}

dfs(A[0], 0, operand[0], operand[1], operand[2], operand[3])

console.log((answer[0] === 0 ? 0 : answer[0]))
console.log((answer[1] === 0 ? 0 : answer[1]))

