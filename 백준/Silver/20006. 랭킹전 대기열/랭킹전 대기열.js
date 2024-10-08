const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

/**
   *  플레이어가 입장을 신청하였을 때 매칭이 가능한 방이 없다면 새로운 방을 생성하고 입장시킨다. 
   *  이떄 해당 방에는 처음 입장한 플레이어의 레벨을 기준으로 -10부터 +10까지 입장 가능하다.
      입장 가능한 방이 있다면 입장시킨 후 방의 정원이 모두 찰 때까지 대기시킨다.
      이때 입장이 가능한 방이 여러 개라면 먼저 생성된 방에 입장한다.
      방의 정원이 모두 차면 게임을 시작시킨다.
*/
// p: 플레이어의 수, m: 방의 정원
const [p, m] = input[0].split(" ").map(Number)
const players = input.slice(1).map((row) => {
  const [level, nickname] = row.split(" ")
  return [Number(level), nickname]
})
const rooms = []

for (let [level, nickname] of players) {
  if (rooms.length == 0) {
    rooms.push([[level, nickname]])
    continue
  }
  let isNoRoom = true
  for (let room of rooms) {
    const [standardLevel] = room[0]
    if (
      room.length < m &&
      standardLevel - 10 <= level &&
      standardLevel + 10 >= level
    ) {
      room.push([level, nickname])
      isNoRoom = false
      break
    }
  }
  if (isNoRoom) {
    rooms.push([[level, nickname]])
  }
}
for (let room of rooms) {
  room.sort((a, b) => (a[1] < b[1] ? -1 : 1))
}
const answer = []

for (let room of rooms) {
  if (room.length == m) {
    answer.push("Started!")
  } else {
    answer.push("Waiting!")
  }
  answer.push(room.map((row) => row.join(" ")).join("\n"))
}
console.log(answer.join('\n'))
