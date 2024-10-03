const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const count = (str) => {
  const cnt = {}
  for (let char of str) {
    if (!cnt[char]) {
      cnt[char] = 0
    }
    cnt[char] += 1
  }
  return cnt
}

const n = Number(input[0])
let answer = 0

const [original, ...rest] = input.slice(1)
const [originalCnt, ...restCnt] = [original, ...rest].map((val) => count(val))

for (let i = 0; i < n-1; i++) {
  const target = rest[i]
  const tmpOriginalCnt = { ...originalCnt }
  const targetCnt = restCnt[i]
  if (original.length > target.length) {
    // original에서 빼거나
    for (let key of target) {
      tmpOriginalCnt[key] -= 1
      if (tmpOriginalCnt[key] == 0) {
        delete tmpOriginalCnt[key]
      }
    }
    if (Object.values(tmpOriginalCnt).reduce((a, b) => a + b) === 1) {
      answer += 1
    }
  } else if (original.length < target.length) {
    // original에서 더하거나
    for (let key of original) {
      targetCnt[key] -= 1
      if (targetCnt[key] == 0) {
        delete targetCnt[key]
      }
    }
    if (Object.values(targetCnt).reduce((a, b) => a + b) === 1) {
      answer += 1
    }
  } else {
    // original에서 변경
    for (let key of target) {
      if(tmpOriginalCnt[key]){  
        tmpOriginalCnt[key] -= 1
          if (tmpOriginalCnt[key] == 0) {
            delete tmpOriginalCnt[key]
          }
      }
    }
    if (Object.values(tmpOriginalCnt).length === 0 || Object.values(tmpOriginalCnt).reduce((a,b)=>a+b) === 1  ) {
      answer += 1
    }
  }
}
console.log(answer)
