const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
let S = input[1].split(" ").map(Number)
const D = input[2].split(" ").map(Number)

// P 카드를 D방식으로 K번 섞은 게 S

// Di번째 카드를 i번째로 가져오기

// D: [4 3 1 2 5]
// 현재 S의 1번째는 4번째로 보내기
// 현재 S의 2번째는 3번째로 보내기
// 현재 S의 3번째는 1번째로 보내기
// 현재 S의 4번째는 2번째로 보내기
// 현재 S의 5번째는 5번째로 보내기

let newArr = Array.from({ length: n })
for (let i = 0; i < k; i += 1) {
  for (let j = 0; j < n; j += 1) {
    const cur = S[j]
    const where = D[j] - 1
    newArr[where] = cur
  }
  S = [...newArr]
}

console.log(S.join(" "))
