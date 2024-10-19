const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 일차원 좌표상의 점 N개와 선분 M개가 주어진다.
// 이때, 각각의 선분 위에 입력으로 주어진 점이 몇 개 있는지 구

// 1 ≤ N, M ≤ 100,000
// 모든 좌표는 1,000,000,000보다 작거나 같은 자연수
const [N, M] = input[0].split(" ").map(Number)

const dots = input[1].split(" ").map(Number)
dots.sort((a, b) => a - b)

const lines = input.slice(2).map((row) => row.split(" ").map(Number))
const answer = []

const findStartIndex = (dots, lineValue) => {
  let start = 0
  let end = dots.length - 1
  let answer = null
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (dots[mid] >= lineValue) {
      // 우리가 찾는 값: lineValue 보다 딱 하나 더 작은 dots의 인덱스
      answer = mid - 1
      end = mid - 1
    } else if (dots[mid] < lineValue) {
      start = mid + 1
    } 
  }
  return answer
}
const findEndIndex = (dots, lineValue) => {
  let start = 0
  let end = dots.length - 1
  let answer = null
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (dots[mid] > lineValue) {
      end = mid - 1
    } else if (dots[mid] <= lineValue) {
      // 우리가 찾는 값: lineValue 보다 딱 하나 더 큰 dots의 인덱스
      answer = mid + 1
      start = mid + 1
    } 
  }
  return answer
}
for (let [start, end] of lines) {
  const sIdx = findStartIndex(dots, start)
  const eIdx = findEndIndex(dots, end)

  answer.push(sIdx == null || eIdx == null ? 0 : eIdx - sIdx - 1)
}
console.log(answer.join("\n"))
