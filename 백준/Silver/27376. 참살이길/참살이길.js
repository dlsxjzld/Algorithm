const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const lights = input.slice(1).map((row) => row.split(" ").map(Number))
lights.sort((a, b) => a[0] - b[0])

let dist = 0
let time = 0

const cal = (time, period, start) => {
  if (time < start) {
    return start - time
  }
  const rest = time - start

  const flag = Math.floor(rest / period) % 2 // 홀수면 빨 // 짝수면 초

  if (flag === 1) {
    // 다음 초록으로 변할때까지의 시간을 return
    return period - (rest % period)
  } else {
    return 0
  }
}

for (let [pos, period, start] of lights) {
  time += pos - dist
  time += cal(time, period, start)
  dist = pos
}
time += n - dist
console.log(time)