const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [p, m] = input[0].split(" ").map(Number)
const roomList = []

for (let i = 1; i < 1 + p; i++) {
  const [level, nickname] = input[i].split(" ")
  if (roomList.length === 0) {
    roomList.push([[Number(level), nickname]])
    continue
  }
  let isNoRoom = true
  for (let room of roomList) {
    if (
      room.length < m &&
      room[0][0] - 10 <= Number(level) &&
      room[0][0] + 10 >= Number(level)
    ) {
      room.push([Number(level), nickname])
      isNoRoom = false
      break
    }
  }
  if (isNoRoom) {
    roomList.push([[Number(level), nickname]])
  }
}

for (let room of roomList) {
  room.sort((a, b) => (a[1] > b[1] ? 1 : -1))
}

const answer = []
for (let room of roomList) {
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
