const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 예산 총액은 정해져 있음
// 가능한 한 최대의 총 예산을 배정
// 1. 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정한다.
// 2. 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정한다.
// 상한액 이하의 예산요청은 요청한 금액을 그대로 배정한다.

// 지방의 수 : N 10^4
// 각 지방의 예산 값들 1~ 10^5
// 총 예산: M N이상 10^9이하

// 1-> 모든 값들의 합 <= M
// 2-> 모든 값들의 합 > M

// 모든 값들 오름차순 정렬
// 적절한 값 = 가장 작은 값과 가장 큰 값 더하고 나누기 2
// 누적합 + (n- 적절한 값 이후 index) * 적잘한 값 <= M 이면 오케이

const n = Number(input[0])
const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
const m = Number(input[2])

const total = data.reduce((a, b) => a + b)
let left = 1
let right = data[n - 1]
let answer = data[0]

const canGive = (price) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (data[i] <= price) {
      sum += data[i]
    } else {
      sum += price
    }
  }

  return sum <= m
}

if (total <= m) {
  console.log(data[n - 1])
} else {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (canGive(mid)) {
      left = mid + 1
      answer = mid
    } else {
      right = mid - 1
    }
  }
  console.log(answer)
}
