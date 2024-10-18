const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [N, K] = input[0].split(" ").map(Number)

const coin = input.slice(1).map(Number)
let cnt = 0
for (let start = N - 1; start >= 0; start--) {
  if (K == 0) break
  const cur = coin[start]
  let tmpCnt = Math.floor(K / cur)
  K -= tmpCnt * cur
  cnt += tmpCnt
}

console.log(cnt)
