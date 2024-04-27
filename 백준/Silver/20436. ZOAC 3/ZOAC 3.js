const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 왼손 오른손
// 누를 때 걸리는 시간 : 1
// 이동할 때 걸리는 시간 : |x1-x2| + |y1-y2|

// 현재 위치에서
// 1. 해당 문자열의 처음부터 끝까지 체크
// 2. 문자열과 왼손의 위치, 오른손의 위치 비교해서 가까운 것으로 하기
// 3. 손의 위치 갱신
// 필요한 것
// - 자판 키보드 위치
// - 왼손 위치, 오른손 위치
// - 시간

let [l, r] = input[0].split(" ")
const target = input[1].split("")
let time = target.length
const leftKeyboard = {
  q: [0, 0],
  w: [0, 1],
  e: [0, 2],
  r: [0, 3],
  t: [0, 4],

  a: [1, 0],
  s: [1, 1],
  d: [1, 2],
  f: [1, 3],
  g: [1, 4],

  z: [2, 0],
  x: [2, 1],
  c: [2, 2],
  v: [2, 3],
}
const rightKeyboard = {
  y: [0, 5],
  u: [0, 6],
  i: [0, 7],
  o: [0, 8],
  p: [0, 9],
  h: [1, 5],
  j: [1, 6],
  k: [1, 7],
  l: [1, 8],
  b: [2, 4],
  n: [2, 5],
  m: [2, 6],
}

for (let currentChar of target) {
  if (currentChar in leftKeyboard) {
    const [currentX, currentY] = leftKeyboard[currentChar]
    const [leftX, leftY] = leftKeyboard[l]
    let diffLeft = Math.abs(leftX - currentX) + Math.abs(leftY - currentY)
    time += diffLeft
    l = currentChar
  } else {
    const [currentX, currentY] = rightKeyboard[currentChar]
    const [rightX, rightY] = rightKeyboard[r]
    let diffRight = Math.abs(rightX - currentX) + Math.abs(rightY - currentY)
    time += diffRight
    r = currentChar
  }
}

console.log(time)
