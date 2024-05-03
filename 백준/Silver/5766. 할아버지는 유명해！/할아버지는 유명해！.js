const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const answer = []
let index = 0
while (true) {
  const [n, m] = input[index++].split(" ").map(Number)
  if (n == 0 && m == 0) {
    break
  }
  const ranking = {}
  for (let i = 0; i < n; i++) {
    const row = input[index++].split(" ").map(Number)
    row.forEach((val) => {
      if (!ranking[val]) {
        ranking[val] = 1
      } else {
        ranking[val] += 1
      }
    })
  }
  let max = -Infinity
  for (let key in ranking) {
    max = Math.max(ranking[key], max)
  }
  let targetMax = -Infinity
  for(let key in ranking){
    if(ranking[key] !== max){
      targetMax = Math.max(ranking[key],targetMax)
    }
  }
  const result = []
  for (let key in ranking) {
    if (ranking[key] ==targetMax) {
      result.push(key)
    }
  }

  result.sort((a, b) => a - b)
  answer.push(result.join(" "))
}
console.log(answer.join("\n"))
