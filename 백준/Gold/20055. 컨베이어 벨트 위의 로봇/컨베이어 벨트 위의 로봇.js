const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, K] = input[0].split(" ").map(Number)
const belt = input[1].split(" ").map(Number)
const robot = Array.from({ length: 2 * N }, () => false)

let answer = 0 // 단계

// 1. 벨트와 로봇 회전
const rotate = (belt, robot) => {
  belt.unshift(belt.pop())
  robot.unshift(robot.pop())
}

// 2. 로봇 한칸 더 이동
const moveRobot = (belt, robot, N) => {
  for (let index = N - 2; index >= 1; index--) {
    if(!robot[index]) continue
    if (belt[index + 1] > 0 && robot[index + 1] === false) {
      belt[index + 1] -= 1
      robot[index + 1] = true
      robot[index] = false
    }
  }
}

// 3. 올리는 위치에 로봇 올리기
const addRobot = (belt, robot) => {
  if (belt[0] > 0 && robot[0] == false) {
    belt[0] -= 1
    robot[0] = true
  }
}

// 4. 내구도 0인 칸의 개수 K개 이상이면 종료
const isDone = (belt, K) => {
  return belt.filter((val) => val == 0).length >= K
}

const deleteRobot = (robot, N) => {
  if (robot[N - 1] == true) {
    robot[N - 1] = false
  }
}

while (true) {
  answer += 1
  rotate(belt, robot)
  deleteRobot(robot, N)

  moveRobot(belt, robot, N)
  deleteRobot(robot, N)

  addRobot(belt, robot)
  if (isDone(belt,K)) {
    console.log(answer)
    break
  }
}
