const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [king, stone, n] = input[0].split(" ")
king = king.split('')
stone = stone.split('')
const movingInformation = input.slice(1, 1 + n)
const chessBoard = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, () => 0),
)

// 행 열
const move = {
  R: [0, 1],
  L: [0, -1],
  B: [1, 0],
  T: [-1, 0],
  RT: [-1, 1],
  LT: [-1, -1],
  RB: [1, 1],
  LB: [1, -1],
}

const col = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
}
const row = {
  8: 0,
  7: 1,
  6: 2,
  5: 3,
  4: 4,
  3: 5,
  2: 6,
  1: 7,
}

const convertedCol = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
}

const convertedRow = {
  0: "8",
  1: "7",
  2: "6",
  3: "5",
  4: "4",
  5: "3",
  6: "2",
  7: "1",
}
//  ABCDEFGH
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

movingInformation.forEach((val, idx) => {
  const [nx, ny] = move[val]
  const [ky, kx] = king
  const [sy, sx] = stone

  let [convertedKy, convertedKx] = [col[ky], row[kx]]
  let [convertedSy, convertedSx] = [col[sy], row[sx]]

  let [nextKy, nextKx] = [convertedKy + ny, convertedKx + nx]
  if (nextKy < 0 || nextKy >= 8 || nextKx < 0 || nextKx >= 8) return

  if (nextKy === convertedSy && nextKx === convertedSx) {
    convertedSy += ny
    convertedSx += nx
  }
  if (
    convertedSy < 0 ||
    convertedSx < 0 ||
    convertedSy >= 8 ||
    convertedSx >= 8
  )
    return

    
  king = [convertedCol[nextKy], convertedRow[nextKx]]
  stone = [convertedCol[convertedSy], convertedRow[convertedSx]]
  
})

console.log(king.join(''))
console.log(stone.join(''))
