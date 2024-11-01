const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const answer = []

for (let tc = 0; tc < T; tc++) {
  const W = input[tc * 2 + 1]
  const K = Number(input[tc * 2 + 2])
  let MAX = Number.MIN_SAFE_INTEGER
  let MIN = Number.MAX_SAFE_INTEGER

  // k개 포함된 문자열
  // 1. K개 포함된 알파벳만 구하기
  // 2. 그 중에서 가장 긴 문자열 길이 구하기
  // 시작과 끝이 같은 알파벳이여야함

  const alphabet = new Map()

  for (let i = 0; i < W.length; i++) {
    const char = W[i]
    if (!alphabet.has(char)) {
      alphabet.set(char, [])
    }

    alphabet.get(char).push(i)
  }

  const candidate = Array.from(alphabet).filter(([_, values]) => values.length >= K)

  for (let [char, values] of candidate) {
    for (let i = 0; i <= values.length - K; i += 1) {
      MAX = Math.max(MAX, values[i + K - 1] - values[i] + 1)
      MIN = Math.min(MIN, values[i + K - 1] - values[i] + 1)
    }
  }
  if (MIN == Number.MAX_SAFE_INTEGER) {
    answer.push("-1")
  } else {
    answer.push(`${MIN} ${MAX}`)
  }
}
console.log(answer.join("\n"))
