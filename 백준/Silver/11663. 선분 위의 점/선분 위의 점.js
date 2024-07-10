const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const dots = input[1].split(" ").map(Number)
const lines = input.slice(2).map((row) => row.split(" ").map(Number))
dots.sort((a,b)=>a-b)
// 0 1  2  3  4
// 1 3 10 20 30

// 1 10 -> 0 2
// 끝은 mid가 target보다 작거나 같은 값 중에 제일 큰 값
// 시작은 mid가 target보다 크거나 같은 값 중에 제일 작은 값

// 2 15 -> 3포함 10포함  1 2
// 4 8 -> 2 1

// 0 2
// 3 4
// 1 4
// 1 2
// 2 1

const findStartIndex = (start, end, target) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (dots[mid] >= target) {
      end = mid-1
    } else {
      start = mid + 1
    }
  }
  return end+1
}

const findEndIndex = (start, end, target) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (dots[mid] > target) {
      end = mid-1
    } else {
      start = mid +1
    }
  }
  return start-1
}
const answer = []
for (let [s, e] of lines) {

  const start = findStartIndex(0, n-1, s)
  const end = findEndIndex(0, n-1, e)

  answer.push(end -start+1>0 ? end - start + 1 : 0)
}

console.log(answer.join('\n'))