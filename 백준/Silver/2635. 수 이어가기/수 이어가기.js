const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const check = (num, num2) => {
  const tmp = [num, num2]
  let first = num
  let second = num2
  let third = first - second
  while (third >= 0) {
    tmp.push(third)
    first = second
    second = third
    third = first - second
  }
  return tmp
}
let answer = [n]
for (let i = n; i > 0; i -= 1) {
  const array = check(n,i)
  if(answer.length <= array.length){
    answer = array
  }
}
console.log(answer.length)
console.log(answer.join(' '))
