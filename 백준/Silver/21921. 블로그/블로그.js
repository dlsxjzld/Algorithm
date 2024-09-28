const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, x] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)
let answer = 0 // 최대 방문자 수

let sum = numbers.slice(0, x).reduce((a, b) => a + b) // 방문자 수
let cnt = 1 // 기간의 수
answer = sum

for (let i = 1; i < n - x + 1; i++) {
  sum = sum - numbers[i - 1] + numbers[i + x-1]
  if (sum === answer) {
    cnt += 1
  } else if (sum > answer) {
    answer = sum
    cnt = 1
  }
}
if(answer === 0){
console.log('SAD')
}
else{
console.log([answer, cnt].join("\n"))
}