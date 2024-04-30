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

// 연산자의 개수 === 수의 개수 - 1
// operands.length === n-1

// 각 연산자의 개수 > 0 이면 재귀로 진행
// 연산자의 개수 - 1, 해당 연산자를 넣어서 계산한 값 함수에 넘겨야 재귀로 진행 가능
// total, +의 개수, -의 개수, *의 개수, /의 개수

const calculate = (total, numberIndex, plus, minus, multiply, divide) => {
  if (numberIndex == numbers.length) {
    MIN = Math.min(total, MIN)
    MAX = Math.max(total, MAX)
    return
  }
  // index가 numbers.length 와 같아지면 재귀 그만해야함
  // 숫자가 2개라면 index는 0, 1로 접근 가능 하기 때문.

  if (plus > 0) {
    calculate(
      total + numbers[numberIndex],
      numberIndex + 1,
      plus - 1,
      minus,
      multiply,
      divide,
    )
  }
  if (minus > 0) {
    calculate(
      total - numbers[numberIndex],
      numberIndex + 1,
      plus,
      minus - 1,
      multiply,
      divide,
    )
  }
  if (multiply > 0) {
    calculate(
      total * numbers[numberIndex],
      numberIndex + 1,
      plus,
      minus,
      multiply - 1,
      divide,
    )
  }
  if (divide > 0) {
    calculate(
      total > 0
        ? Math.floor(total / numbers[numberIndex])
        : -Math.floor(-total / numbers[numberIndex]),
      numberIndex + 1,
      plus,
      minus,
      multiply,
      divide - 1,
    )
  }
}

calculate(numbers[0], 1, operands[0], operands[1], operands[2], operands[3])

console.log(MAX === 0 ? 0 : MAX)
console.log(MIN === 0 ? 0 : MIN)
