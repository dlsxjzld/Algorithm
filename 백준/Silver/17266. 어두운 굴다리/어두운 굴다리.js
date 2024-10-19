const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 모든 길 0~N
// 최소한의 높이

const N = Number(input[0])
const M = Number(input[1])
const x = input[2].split(" ").map(Number)

// 높이 설정 -> 이분탐색
// 이 높이가 모든 가로등에 대입했을 때 되는지 확인
//  (index(현재 가로등 위치)) - (index-1)  > height 면 안됨
//  (index+1) - (index(현재 가로등 위치))  > height 면 안됨
//  가로등 index = 0 일 때 0까지 거리 > height 면 안됨
//  가로등 index = M-1 일 때 N까지 거리 > height 면 안됨
// 가로등이 1개
// 가로등이 2개
// 가로등이 M개

const canLight = (x, N, height) => {
  if (x[0] > height) return false
  if (N - x[x.length - 1] > height) return false
  for (let i = 0; i <= x.length - 2; i++) {
    if ((x[i + 1] - x[i]) / 2 > height) {
      return false
    }
  }
  return true
}

const bs = (start, end, x, N) => {
  let answer = N
  

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (canLight(x, N, mid)) {
      answer = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return answer
}

console.log(bs(0, N, x, N))
