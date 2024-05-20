const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const line = input[1].split(" ").map(Number).sort((a,b)=>a-b)

const answer = []

const findEndIndex = (target) => {
  // 끝점은 target이 line[mid]보다 크거나 같으면 mid
  let start = 0
  let end = n - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (target < line[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return end
}
const findStartIndex = (target) => {
  // 시작점은 target이 line[mid]보다 작거나 같으면 mid
  let start = 0
  let end = n - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (target > line[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}

input.slice(2).forEach((row) => {
  const [s, e] = row.split(" ").map(Number)
  const eIdx = findEndIndex(e)
  const sIdx = findStartIndex(s)

  answer.push(eIdx - sIdx + 1)
})

console.log(answer.join("\n"))
