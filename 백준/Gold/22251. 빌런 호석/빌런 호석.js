const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

/**
 * N ,K ,P ,X
 *
 * LED는 한 자리당 7개
 * 501 -> 0501 (앞에 자릿수 없으면 0으로 채우기)
 * X층에서 시작
 *
 *
 * 바꾼 수가 충족해야할 조건
 *
 * 1. 1~P개 변경 가능
 * 2. 1 이상 N 이하
 * 3. 1번 2번 충족하면 결과 값에 넣기
 *
 */

const [N, K, P, X] = input[0].split(" ")
// 각 수와 수를 비교해야함
// 반전되는 값의 차이가 1이상 P이하면 바꿀 수 있음
const LED = {
  // top , lt, rt, mid, lb,rb,bottom
  0: [true, true, true, false, true, true, true],
  1: [false, false, true, false, false, true, false],
  2: [true, false, true, true, true, false, true],
  3: [true, false, true, true, false, true, true],
  4: [false, true, true, true, false, true, false],
  5: [true, true, false, true, false, true, true],
  6: [true, true, false, true, true, true, true],
  7: [true, false, true, false, false, true, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true],
}

const answer = new Set([])
const convertedX = ("0".repeat(Number(K) - X.length) + X).split("")

const change = (currentP, numbers, currentIndex) => {
  if (currentP === 0 || (currentP >= 0 && currentIndex === Number(K))) {
    // 마지막 자리까지 왔으면
    const target = Number(numbers.join(""))

    if (target > 0 && target <= N && target != Number(X)) {
      answer.add(numbers.join(""))
    }
    return
  }
  const currentChar = numbers[currentIndex]
  const newArray = [...numbers]

  for (let i = 0; i <= 9; i++) {
    const cnt = LED[currentChar].filter(
      (val, index) => val !== LED[i][index],
    ).length
    if (cnt <= currentP) {
      newArray[currentIndex] = i.toString()
      change(currentP - cnt, newArray, currentIndex + 1)
    }
  }

  change(currentP, numbers, currentIndex + 1)
}

change(P, convertedX, 0)
console.log(answer.size)
