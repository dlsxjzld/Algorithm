const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const destroyWall = input.slice(2).map((row) => row.split(" ").map(Number)) ?? [
  0, 0,
]

destroyWall.sort((a,b)=>a[0] < b[0] ? -1 : 1)

const wall = Array.from({ length: n + 1 }, () => 0)

destroyWall.forEach(([start, end]) => {
  for (let i = start; i <= end; i++) {
    if (wall[start] === 0) {
      wall[i] = start
    } else {
      wall[i] = wall[start]
    }
  }
})


const oneRoomCount = wall.slice(1).filter((val)=> val === 0).length
const multiRoomCount = Array.from(new Set(wall.slice(1).filter((val)=>val !== 0))).length

console.log(oneRoomCount + multiRoomCount)
