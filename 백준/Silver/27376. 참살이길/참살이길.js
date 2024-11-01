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
  const now = time - start
  const sw = Math.floor(now / period) % 2
  return sw * (period - (now % period))
}

for (let [pos, period, start] of lights) {
  time += pos - dist
  time += cal(time, period, start)
  dist = pos
}
time += n - dist
console.log(time)
