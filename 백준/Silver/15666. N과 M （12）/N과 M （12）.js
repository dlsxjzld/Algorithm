const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const numberList = input[1].split(" ").map(Number).sort((a,b)=>a-b)

const result = new Set()

const temp_result = []

const addNum = (curr_result) => {
  if (curr_result.length >= m) {
    
    result.add(curr_result.join(' '))
    return
  }
  const lastNum = curr_result.at(-1) ?? -1
  for (let i = 0; i < n; i++) {
    if (lastNum <= numberList[i]) {
      curr_result.push(numberList[i])
      addNum([...curr_result])
      curr_result.pop()
    }
  }
}

addNum(temp_result)
const answer = Array.from(result)
console.log(answer.join('\n'))
