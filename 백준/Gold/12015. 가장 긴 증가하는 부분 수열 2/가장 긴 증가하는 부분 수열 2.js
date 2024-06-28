const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const a = input[1].split(" ").map(Number)
const dp = [a[0]]

const findIndex = (list, s, e, target) => {
  while (s < e) {
    let mid = Math.floor((s + e) / 2)
    if (list[mid] >= target) {
      e = mid
    } else {
      s = mid + 1
    }
  }
  return e
}

for (let i = 1; i < n; i++) {
  if (a[i] > dp[dp.length - 1]) {
    dp.push(a[i])
  } else {
    const index = findIndex(dp, 0, dp.length - 1, a[i])
    dp[index] = a[i]
  }
}

console.log(dp.length)
