const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const [n, k] = input[0].split(" ").map(Number)

const num = [1, 2, 3]
const solution = (target) => {
  const numbers = []
  const getNum = (target, array) => {
    const total = array.reduce((a, b) => a + b, 0)
    if (total > target) {
      return
    }
    if (total == target) {
      numbers.push(array.join(""))
    }
    for (let i = 0; i < 3; i++) {
      array.push(num[i])
      getNum(target, array)
      array.pop()
    }
  }
  getNum(target, [])
  numbers.sort((a, b) => (a < b ? -1 : 1))
  return numbers
}

const answer = solution(n).map((val)=>val.split('').join('+'))[k-1] ?? -1
console.log(answer)
