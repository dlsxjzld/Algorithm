const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const buckets = Array.from({ length: n + 1 }, (val, index) => index)
const changePlan = input
  .slice(1, 1 + m)
  .map((row) => row.split(" ").map(Number))

for (let [i, j] of changePlan) {
  ;[buckets[j], buckets[i]] = [buckets[i], buckets[j]]
}

console.log(buckets.slice(1,1+n).join(' '))
