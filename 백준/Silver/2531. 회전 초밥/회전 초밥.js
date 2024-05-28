const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 연속해서 k개 먹기 -> 추가 1접시
// 초밥 가짓수의 최댓값 구하기
// 1~n 넘어가면 n으로 나눈 나머지 가 인덱스

const [n, d, k, c] = input[0].split(" ").map(Number)
const food = input.slice(1).map(Number)

let cnt = -Infinity // 초밥 가짓수의 최댓값

let counting = {}

// 0부터 k-1까지 구하기
for (let i = 0; i < k; i++) {
  if (counting[food[i]] === undefined) {
    counting[food[i]] = 1
  } else {
    counting[food[i]] += 1
  }
}

counting[c] = counting[c] === undefined ? 1 : counting[c] + 1 // 쿠폰
cnt = Object.keys(counting).length

let start = 0
let dish = k
while (start < n) {
  let end = dish % n

  counting[food[start]] -= 1
  if (counting[food[start]] === 0) {
    delete counting[food[start]]
  }

  if (counting[food[end]] === undefined) {
    counting[food[end]] = 1
  } else {
    counting[food[end]] += 1
  }
  cnt = Math.max(cnt, Object.keys(counting).length)
  start++
  dish++
}
console.log(cnt)
