const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

// n개 있으면 1->3 1개 옮기고 n-1개 1->2
//
// n-1개 있으면 2->3 1개 옮기고 n-2개 2->1
// n-2개 있으면 1->3 1개 옮기고 n-3개 1->2
const answer = []

const hanoi = (from, thru, to, num) => {
  if (num === 0) return
  hanoi(from, to, thru, num - 1)
  answer.push(`${from} ${to}`)
  hanoi(thru, from, to, num - 1)
}

console.log((BigInt(2**n) - 1n).toString())
if(n<=20){
  hanoi(1, 2, 3, n)
  console.log(answer.join('\n'))
}