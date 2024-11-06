const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 홍익이는 조카들에게 최대한 긴 과자를 나눠주려고 한다.
// 반드시 모든 조카에게 같은 길이의 막대 과자를 나눠주어야 한다
// M명의 조카가 있고 N개의 과자가 있을 때, 조카 1명에게 줄 수 있는 막대 과자의 최대 길이를 구하라.
// 조카의 수 M (1 ≤ M ≤ 1,000,000), 과자의 수 N (1 ≤ N ≤ 1,000,000)

const [M, N] = input[0].split(" ").map(Number)
const cookies = input[1].split(" ").map(Number)
cookies.sort((a, b) => a - b)
const canGive = (cookieSize, M, cookies) => {
  // M명의 조카한테 모두 같은 길이의 cookieSize를 줘야함
  // cookies에서 cookieSize가 M개 나올 수 있어야함
  let cnt = 0
  for (let cookie of cookies) {
    cnt += Math.floor(cookie / cookieSize)
  }
  if (cnt < M) {
    return false
  }
  return true
}

const bs = (start, end, M, cookies) => {
  let answer = 0
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (canGive(mid, M, cookies)) {
      answer = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return answer
}
console.log(bs(0, cookies[N - 1], M, cookies))
