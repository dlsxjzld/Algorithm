const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const n = BigInt(input[0])

function solve (n){
  let [first,second] = [0n,1n]
  for (let i = 2; i <= (n%1_500_000n); i++) {
    [first,second] = [second,(first+second) % 1_000_000n]
  }
  return second
}
console.log(solve(n).toString())