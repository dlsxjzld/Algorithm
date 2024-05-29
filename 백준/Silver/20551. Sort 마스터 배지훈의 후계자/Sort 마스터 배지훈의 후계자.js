const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const [n, m] = input[0].split(" ").map(Number)

const A = input
  .slice(1, 1 + n)
  .map(Number)
  .sort((a, b) => a - b)
const D = input.slice(1 + n).map(Number)

// D가 처음으로 등장한 위치
// 단, 존재하지 않는다면 -1를 출력
// 배열에서 가장 앞의 원소의 위치는 0이다
// 100_000 -> nlogn, n , logn

//A [ -1, 0, 2, 3, 9 ]
//D [ -1, 10, 5, 9, 0 ]

// 이분탐색
const search = (target) => {
  let start = 0
  let end = n - 1
  let index = Infinity

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (A[mid] >= target) {
      if (A[mid] === target) {
        index = mid
      }
      end = mid - 1
    } else {
      // A[mid] < target
      start = mid + 1
    }
  }

  // 못 찾으면 -1 return
  if (index === Infinity) {
    return -1
  }
  // 찾으면 index return
  return index
}

const answer = []

for (let d of D) {
  // console.log(index, d)
  answer.push(search(d))
}

console.log(answer.join("\n"))
