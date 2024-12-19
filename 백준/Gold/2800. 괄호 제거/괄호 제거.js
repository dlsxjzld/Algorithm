const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 괄호 쌍을 지우거나, 안지우거나
// 전부 안 지운거는 마지막에 정답에서  제외해야함

const origin = input[0].split("")

const bracketSet = []

const tmp = []
for (let i = 0; i < origin.length; i += 1) {
  if (origin[i] === "(") {
    tmp.push(i)
  } else if (origin[i] === ")" && tmp.length > 0) {
    const start = tmp.pop()
    bracketSet.push([start, i])
  }
}

const answer = new Set()
answer.add(origin.join(""))

const dfs = (arr, depth) => {
  if (depth === bracketSet.length) {
    answer.add(arr.join(""))
    return
  }
  const [s, e] = bracketSet[depth]
  const deletedArr = arr.map((val, idx) => (idx === s || idx === e ? "" : val))
  dfs(deletedArr, depth + 1)
  dfs(arr, depth + 1)
}

for (let i = 0; i < bracketSet.length; i += 1) {
  dfs([...origin], i)
}

answer.delete(origin.join(""))
const myAnswer = Array.from(answer)
myAnswer.sort()
console.log(myAnswer.join('\n'))
