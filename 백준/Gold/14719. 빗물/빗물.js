const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [h, w] = input[0].split(" ").map(Number)
const heights = input[1].split(" ").map(Number)

/**
 * 고이는 빗물의 총량
 * 고이려면 블록과 블록 사이에 공간이 있어야함
 * 0번째 인덱스와 w-1번째 인덱스는 고일 수 없음 (마지막 벽들이므로)
 * 현재 인덱스 기준으로 가장 큰 왼쪽 벽, 가장 큰 오른쪽 벽 찾아야함.
 * 찾았으면 그 중에 더 낮은 높이 벽만큼 물이 찰 수 있음
 */
let total = 0 // 빗물의 양

for (let i = 1; i < w - 1; i++) {
  let current = heights[i]
  let left = Math.max(...heights.slice(0, i))
  let right = Math.max(...heights.slice(i + 1))
  let compare = Math.min(left, right)
  total += compare > current ? compare - current : 0
}

console.log(total)
