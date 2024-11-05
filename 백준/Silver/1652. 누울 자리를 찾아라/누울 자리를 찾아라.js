const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
// 똑바로 연속해서 2칸 이상의 빈 칸이 존재하면 그 곳에 몸을 양 옆으로 쭉 뻗으면서 누울 수 있다.
// 가로로 누울 수도 있고 세로로 누울 수도 있다.
// 누울 때는 무조건 몸을 쭉 뻗기 때문에 반드시 벽이나 짐에 닿게 된다. (중간에 어정쩡하게 눕는 경우가 없다.)

// 가로: 행마다 2칸이상 연속인지
// 세로: 열마다 2칸이상 연속인지
const n = Number(input[0])
const room = input.slice(1).map((row) => row.split(""))
const answer = [0, 0]
for (let i = 0; i < n; i += 1) {
  let can = 0
  for (let j = 0; j < n; j += 1) {
    if (room[i][j] == ".") {
      can += 1
    }
    if (room[i][j] == "X") {
      if (can >= 2) {
        answer[0] += 1
      }
      can = 0
    }
  }
  if (can >= 2) {
    answer[0] += 1
  }
}

for (let i = 0; i < n; i += 1) {
  let can = 0
  for (let j = 0; j < n; j += 1) {
    if (room[j][i] == ".") {
      can += 1
    }
    if (room[j][i] == "X") {
      if (can >= 2) {
        answer[1] += 1
      }
      can = 0
    }
  }
  if (can >= 2) {
    answer[1] += 1
  }
}

console.log(answer.join(' '))