const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const s = input[0]
const t = input[1].split("")

// 문자열의 뒤에 A를 추가
// 문자열의 뒤에 B를 추가하고 문자열을 뒤집기
let answer = 0
const dfs = (target, curr) => {
  if (target.length === curr.length) {
    if (curr.join("") === target) {
      answer = 1
    }
    return
  }
  if (curr[curr.length - 1] === "A") {
    const next = [...curr]
    next.pop()
    dfs(target, next)
  }
  if (curr[0] === "B") {
    const reversedNext = [...curr].reverse()
    reversedNext.pop()
    dfs(target, reversedNext)
  }
}

dfs(s, t)
console.log(answer)
