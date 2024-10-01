const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0]) // 0 ~ n
const m = Number(input[1])
const x = [0, ...input[2].split(" ").map(Number), n]
// 이분탐색으로 높이를 구하고 이 높이가 모든 굴다리르 비출 수 있는지 확인해야함
// 높이의 최댓값은 n

// 높이가 안되는 경우
// x[1] - 0 > height
// x[n-1] - x[n-2] > height
// (x[2] - x[1])/2 > height , (x[3] - x[2])/2 > height...
const canLight = (height) => {
  if (x[1]-x[0] > height) {
    return false
  }
  if (x[x.length-1] - x[x.length-2] > height) {
    return false
  }
  for (let i = 1; i <= m; i++) {
    if ((x[i + 1] - x[i]) / 2 > height) {
      return false
    }
  }
  return true
}

let start = 0
let end = n
let answer = n
while (start < end) {
  let mid = Math.floor((start + end) / 2)

  if (canLight(mid)) {
    end = mid
    answer = mid
  } else {
    start = mid + 1
  }
}

console.log(answer)
