const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, C] = input[0].split(" ").map(Number)

const homes = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)

let start = 1
let end = homes[N - 1]
let answer = start

const canWifi = (distance, homes, targetCount) => {
  let count = 1
  let prev = homes[0]
  for (let i = 1; i < homes.length; i += 1) {
    const curDist = homes[i] - prev
    if (curDist >= distance) {
      prev = homes[i]
      count += 1
    }
    if(count == targetCount){
        return true
    }

  }
  return false
}

while (start <= end) {
  let mid = Math.floor((start + end) / 2)
  if (canWifi(mid, homes, C)) {
    start = mid + 1
    answer = mid
  } else {
    end = mid - 1
  }
}
console.log(answer)
