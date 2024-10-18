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
  // k개 이상인 문자만 골라서 set에 넣어두기
  // W돌다가 char이 k개 이상인 문자라면 여기서부터 시작해서 k개 될때까지 문자열 구하고 짧은 거 구하기

  const cntOfChar = {}
  const candidate = new Set()
  let answer3 = Number.MAX_SAFE_INTEGER
  let answer4 = Number.MIN_SAFE_INTEGER
  for (let w of W) {
    if (!cntOfChar[w]) {
      cntOfChar[w] = 0
    }
    cntOfChar[w] += 1
    if (cntOfChar[w] == K) {
      candidate.add(w)
    }
  }
  for (let i = 0; i <= W.length - K; i++) {
    const cur = W[i]
    if (!candidate.has(cur)) continue
    let word = ''
    let cnt = 0
    for (let start = i ; start < W.length; start++) {
      word += W[start]
      if (W[start] == cur) {
        cnt += 1
      }
      if (cnt == K) {
        answer3 = Math.min(answer3, start - i + 1)
        answer4 = Math.max(answer4, start - i + 1)
        break
      }
    }
  }
  if (
    answer3 == Number.MAX_SAFE_INTEGER ||
    answer4 == Number.MIN_SAFE_INTEGER
  ) {
    answer.push("-1")
  } else {
    answer.push(`${answer3} ${answer4}`)
  }

}

console.log(answer.join('\n'))