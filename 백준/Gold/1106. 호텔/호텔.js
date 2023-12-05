const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [c, n] = input[0].split(' ').map(Number)
const cities = input.slice(1, 1 + n).map((row) => row.split(' ').map(Number))
const sortedCities = cities.sort((a, b) => a[1] - b[1])
const dp = Array.from({ length: c+1 }, () => Infinity)

// c 명 늘리기
// n 개의 도시
dp[0] = 0
// 각 도시 : [비용 , 고객의 수]
for (let [cost, customer] of sortedCities) {
  if (dp[customer] > cost) {
    dp[customer] = cost
  }
  for (let idx = 1; idx < c + 1; idx++) {
    if (idx < customer) {
      dp[idx] = Math.min(dp[idx], cost)
    } else {
      dp[idx] = Math.min(dp[idx], dp[idx - customer] + dp[customer])
    }
  }
}

console.log(dp[c])
