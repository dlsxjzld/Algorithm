const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let index = 0
const answer = []

const checkWin = (targetType, oppositeType, line) => {
  // const position = new Set() // 좌표
  const lines = []
  for (let i = 0; i < 3; i++) {
    lines.push(line.slice(i * 3, i * 3 + 3))
  }
  const correctChar = targetType.repeat(3)
  const wrongChar = oppositeType.repeat(3)
  let isWrong = false
  // 행 확인
  for (let r = 0; r < 3; r++) {
    if (lines[r].join("") === wrongChar) {
      isWrong = true
    }
  }

  // 열 확인
  for (let c = 0; c < 3; c++) {
    if (lines[0][c] + lines[1][c] + lines[2][c] === wrongChar) {
      isWrong = true
    }
  }

  // \ 대각선 확인
  let char = ""
  for (let i = 0; i < 3; i++) {
    char += lines[i][i]
  }
  if (char === wrongChar) {
    isWrong = true
  }

  // / 대각선 확인
  char = ""
  for (let i = 0; i < 3; i++) {
    char += lines[i][2 - i]
  }
  if (char === wrongChar) {
    isWrong = true
  }

  if (isWrong) return false
  else return true
}

while (true) {
  const word = input[index++]
  if (word === "end") break
  const line = word.split("")
  const xCnt = line.filter((val) => val == "X").length
  const oCnt = line.filter((val) => val == "O").length

  if (xCnt >= 3 && xCnt < 5 && xCnt === oCnt + 1) {
    // X 이길 때만 체크 -> O이기거나 비기면 안됨

    const xWin = checkWin("X", "O", line)
    const oWin = checkWin("O", "X", line)
    if (xWin && !oWin) {
      answer.push("valid")
    } else {
      answer.push("invalid")
    }
  } else if (xCnt === oCnt && oCnt < 5 && oCnt >= 3) {
    // O 이길 때만 체크 -> X이기거나 비기면 안됨

    const xWin = checkWin("X", "O", line)
    const oWin = checkWin("O", "X", line)
    if (!xWin && oWin) {
      answer.push("valid")
    } else {
      answer.push("invalid")
    }
  } else if (xCnt === 5 && xCnt === oCnt + 1) {
    // X 이길 때, 비길 때 체크 -> O이기면 안됨

    const xWin = checkWin('X','O',line)
    const oWin = checkWin("O", "X", line)

    if ((xWin && !oWin) || (xWin && oWin)) {
      answer.push("valid")
    } else {
      answer.push("invalid")
    }
  } else {
    answer.push("invalid")
  }
}

console.log(answer.join("\n"))
