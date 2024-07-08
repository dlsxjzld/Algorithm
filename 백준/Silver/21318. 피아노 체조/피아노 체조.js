const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 0 1 2 3 4 5 6  7 8 9
//   1 2 3 3 4 1 10 8 1

//   0 0 0 0 0 1 1  2 3
const n = Number(input[0])
const arr = [0].concat(input[1].split(" ").map(Number))
const q = Number(input[2])
const question = input.slice(3).map((row) => row.split(" ").map(Number))

const prefix = Array(n + 1).fill(0)

for (let i = 1; i < n; i++) {
  if (arr[i] > arr[i + 1]) {
    prefix[i + 1] = 1
  }
  prefix[i + 1] += prefix[i]
}

const answer = []
for (let [s, e] of question) {
  answer.push(prefix[e] - prefix[s])
}

console.log(answer.join('\n'))