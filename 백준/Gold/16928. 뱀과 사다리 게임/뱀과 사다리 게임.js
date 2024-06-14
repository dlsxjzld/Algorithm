const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)

const 사다리 = {}
const 뱀 = {}

input.slice(1, 1 + N).forEach((data) => {
  const [start, end] = data.split(" ").map(Number)
  사다리[start] = end
})

input.slice(1 + N).forEach((data) => {
  const [start, end] = data.split(" ").map(Number)
  뱀[start] = end
})

const board = Array.from({ length: 101 }, () => 0)

const solution = () => {
  const queue = [[1, 0]] // 시작지점, 주사위 굴린 횟수
  let index = 0

  while (queue.length > index) {
    const [curr, cnt] = queue[index++]
    for (let i = 1; i <= 6; i++) {
      const next = curr + i
      if (next > 100) continue // 주사위가 100 넘어가면 이동 불가
      if (board[next] === 0) {
        // 아직 도착 안했다면
        if (사다리[next] !== undefined) {
          queue.push([사다리[next], cnt + 1])
          board[next] = cnt + 1
          board[사다리[next]] = cnt + 1
        } else if (뱀[next] !== undefined) {
          queue.push([뱀[next], cnt + 1])
          board[next] = cnt + 1
          board[뱀[next]] = cnt + 1
        } else {
          queue.push([next, cnt + 1])
          board[next] = cnt + 1
        }
      } else {
        // 도착했다면
        if (사다리[next] !== undefined && board[next] > cnt + 1) {
          queue.push([사다리[next], cnt + 1])
          board[next] = cnt + 1
          board[사다리[next]] = cnt + 1
        } else if (뱀[next] !== undefined && board[next] > cnt + 1) {
          queue.push([뱀[next], cnt + 1])
          board[next] = cnt + 1
          board[뱀[next]] = cnt + 1
        } else if (
          사다리[next] === undefined &&
          뱀[next] === undefined &&
          board[next] > cnt + 1
        ) {
          queue.push([next, cnt + 1])
          board[next] = cnt + 1
        }
      }
    }
  }
}
solution()
console.log(board[100])
