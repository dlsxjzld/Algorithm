const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [s, n] = input[0].split(" ")

const board = Array.from({ length: n.length }, () =>
  Array.from({ length: Number(s) * 2 + 3 }, () =>
    Array.from({ length: Number(s) + 2 }, () => " "),
  ),
)
const numbers = {
  1: ["rt", "rb"],
  2: ["top", "rt", "mid", "lb", "bottom"],
  3: ["top", "rt", "mid", "rb", "bottom"],
  4: ["lt", "rt", "mid", "rb"],
  5: ["top", "lt", "mid", "rb", "bottom"],
  6: ["top", "lt", "mid", "lb", "rb", "bottom"],
  7: ["top", "rt", "rb"],
  8: ["top", "lt", "rt", "mid", "lb", "rb", "bottom"],
  9: ["top", "lt", "rt", "mid", "rb", "bottom"],
  0: ["top", "lt", "rt", "lb", "rb", "bottom"],
}

const draw = (s, board, targetPosition) => {
  // 가로 s+2 세로 2s+3
  if (targetPosition === "top") {
    for (let i = 1; i < s + 1; i++) {
      board[0][i] = "-"
    }
  } else if (targetPosition === "lt") {
    for (let i = 1; i < Math.floor((2 * s + 3) / 2); i++) {
      board[i][0] = "|"
    }
  } else if (targetPosition === "rt") {
    for (let i = 1; i < Math.floor((2 * s + 3) / 2); i++) {
      board[i][s + 1] = "|"
    }
  } else if (targetPosition === "mid") {
    for (let i = 1; i < s + 1; i++) {
      board[Math.floor((2 * s + 3) / 2)][i] = "-"
    }
  } else if (targetPosition === "lb") {
    for (let i = Math.ceil((2 * s + 3) / 2); i < 2 * s + 2; i++) {
      board[i][0] = "|"
    }
  } else if (targetPosition === "rb") {
    for (let i = Math.ceil((2 * s + 3) / 2); i < 2 * s + 2; i++) {
      board[i][s + 1] = "|"
    }
  } else if (targetPosition === "bottom") {
    for (let i = 1; i < s + 1; i++) {
      board[2 * s + 2][i] = "-"
    }
  }
}
const answer = Array.from({length:2*s+3},()=>[])
for (let i = 0; i < n.length; i++) {
  const targetNumber = n[i]
  const targetPositions = numbers[targetNumber]
  for (let targetPosition of targetPositions) {
    draw(Number(s), board[i], targetPosition)
  }
    for(let j=0;j<2*s+3;j++){
        answer[j].push(board[i][j].join(''))
    }
    
}

console.log(answer.map((row)=>row.join(' ')).join('\n'))
