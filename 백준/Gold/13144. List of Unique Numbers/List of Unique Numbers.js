const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const numbers = input[1].split(" ").map(Number)

let count = 0

const check = Array.from({ length: 100_000 }, () => false)

let start = 0
let end = 0

while (end < N) {
  if (!check[numbers[end]]) {
    check[numbers[end]] = true
    end += 1
  } else {
    count += end - start
    check[numbers[start]] = false
    start += 1
  }
}
count += ((end - start) * (end - start + 1)) / 2
console.log(count)
