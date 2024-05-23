const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const position = input[2].split(" ").map(Number)

// 굴다리 0 ~ n
// 가로등은 모두 높이가 같아야 함
// 가로등의 높이가 h라면 왼쪽으로 h 오른쪽으로 h만큼 비춘다

// 1<= 높이 <= n

// position 에서 -높이 +높이
const checkHeight = (height) => {
  if (m === 1) {
    if (position[0] - height > 0) {
      return false
    }
    if (position[0] + height < n) {
      return false
    }
  }

  for (let i = 0; i < m - 1; i++) {
    const currPos = position[i]
    const nextPos = position[i + 1]
    if (i === 0) {
      // 첫 가로등이라면
      if (currPos - height > 0) {
        // 왼쪽으로 비췄을 때  0보다 크면 어둡기 때문에 이 높이는 안됨
        return false
      }
    }
    if (i === m - 2) {
      // 마지막 가로등이라면
      if (nextPos + height < n) {
        // 오른쪽으로 비췄을 때  n보다 작으면 어둡기 때문에 이 높이는 안됨
        return false
      }
    }

    if (nextPos - height > currPos + height) {
      // 다음 가로등과 현재 가로등 사이가 어두우면 안됨
      return false
    }
  }
  return true
}

const solution = () => {
  let start = 1
  let end = n
  let mid = null
  let height = Infinity

  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (checkHeight(mid)) {
      
      // 이 높이가 된다면? 높이 낮춰야함
      height = Math.min(height, mid)
      end = mid - 1
    } else {
      // 이 높이가 안된다면? 높이 올려야함
      start = mid + 1
    }
  }

  return height
}

console.log(solution())
