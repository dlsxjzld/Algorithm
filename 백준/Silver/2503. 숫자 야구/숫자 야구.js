const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const visited = Array.from({ length: 10 }, () => false)
const hintList = input.slice(1, 1 + n).map((row) => row.split(" "))
// 스트라이크 : 숫자와 위치 모두 일치
// 볼 : 숫자는 일치, 위치는 불일치

const answer = []

function isStrike(check, num, strike) {
  let cnt = 0
  for (let i = 0; i < 3; i++) {
    if (check[i] === num[i]) {
      cnt += 1
    }
  }
  return Number(strike) === cnt
}

function isBall(check, num, ball) {
  let cnt = 0
  for (let i = 0; i < 3; i++) {
    if (num.includes(check[i]) && num[i] !== check[i]) {
      cnt += 1
    }
  }
  return Number(ball) === cnt
}

function dfs(result, visited) {
  if (result.length === 3) {
    const checkNum = result.join("")

    const flag = hintList.every(([threeNum, strike, ball]) => {
        return isStrike(checkNum, threeNum, strike) && isBall(checkNum, threeNum, ball)
    })
    flag &&answer.push(checkNum)
    return
  }

  for (let idx = 1; idx < 10; idx++) {
    if (!visited[idx]) {
      visited[idx] = true
      dfs([...result, idx], visited)
      visited[idx] = false
    }
  }
}

for (let i = 1; i < 10; i++) {
  if (!visited[i]) {
    visited[i] = true
    dfs([i], visited)
    visited[i] = false
  }
}

console.log(answer.length)
