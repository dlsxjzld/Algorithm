const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [p, m] = input[0].split(" ").map(Number)
const players = input.slice(1).map((row) => row.split(" "))

const rooms = []

for (let [level, nickname] of players) {
  if (rooms.length === 0) {
    rooms.push([[Number(level), nickname]])
  } else {
    let noRoom = true
    const myLevel = Number(level)
    for (let room of rooms) {
      const LEVEL = room[0][0]

      if (room.length < m && myLevel >= LEVEL - 10 && myLevel <= LEVEL + 10) {
        room.push([Number(level), nickname])
        noRoom = false
        break
      }
    }
    if (noRoom) {
      rooms.push([[Number(level), nickname]])
    }
  }
}

for (let room of rooms) {
  room.sort((a, b) => (a[1] > b[1] ? 1 : -1))
}

const answer = []

for (let room of rooms) {
  if (room.length === m) {
    answer.push("Started!")
  } else {
    answer.push("Waiting!")
  }
  for (let [level, nickname] of room) {
    answer.push(`${level} ${nickname}`)
  }
}

console.log(answer.join("\n"))
