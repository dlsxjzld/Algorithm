const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = +input[0]
const arr = []

const dfs = (digit, numbers) => {
  if (digit === numbers.length) {
    arr.push(Number(numbers.join("")))
    return
  }

  for (let start = 9; start >= 0; start -= 1) {
    const lastNum = numbers[numbers.length - 1]
    if (lastNum > start) {
      dfs(digit, [...numbers, start])
    }
  }
}

for (let i = 1; i <= 10; i += 1) {
  for (let start = 9; start >= 0; start -= 1) {
    dfs(i, [start])
  }
}

arr.sort((a, b) => a - b)
console.log(arr[N] ?? -1)