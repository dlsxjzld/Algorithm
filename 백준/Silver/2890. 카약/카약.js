const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c] = input[0].split(" ").map(Number)
const board = input.slice(1).map((row) => row.slice(1, -1).split(""))

// 15열 -> 인덱스는 14,
// S와 F 빼기. -> 13열 -> 인덱스는 12

let endColumn = c - 3

const teamRecord = {}

for (let i = 1; i <= 9; i += 1) {
  teamRecord[i] = null
}

let score = 1

for (let col = endColumn; col >= 0; col -= 1) {
  let isTeamArrive = false
  // 마지막 열부터 첫번째 열로 진행
  for (let row = 0; row < r; row += 1) {
    // 첫번째 행부터 마지막 행으로 진행
    const teamNumber = board[row][col]
    if (teamNumber !== "." && teamRecord[teamNumber] === null) {
      teamRecord[teamNumber] = score
      isTeamArrive = true
    }
  }

  if (isTeamArrive) {
    score += 1
  }
}

for (let i = 1; i <= 9; i += 1) {
  console.log(teamRecord[i])
}
