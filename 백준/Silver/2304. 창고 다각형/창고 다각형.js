const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const walls = input
  .slice(1)
  .map((row) => row.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0])

// console.log("walls", walls)
let area = 0
let left = -1



for (let i = 0; i < walls.length - 1; i++) {
  let isAllLow = false
  const [currentL, currentH] = walls[i]
  if (left > currentL) continue
  isAllLow = walls.slice(i + 1).every(([l, h]) => currentH > h)

  for (let j = i + 1; j < walls.length; j++) {
    const [nextL, nextH] = walls[j]
    if (nextH >= currentH) {
      area += (nextL - currentL) * currentH
      left = nextL
      break
    }
  }
  if (isAllLow) {
    let height = -1
    for (let j = i + 1; j < walls.length; j++) {
      const [nextL, nextH] = walls[j]
      if (height < nextH) {
        height = nextH
        left = nextL
      }
    }
    area += currentH
    area += (left - (currentL + 1)) * height
  }
}
area += walls[n - 1][1] // 마지막 기둥
console.log(area)
