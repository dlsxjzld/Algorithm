const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const boardAndSnake = {}
input.slice(1).forEach((row) => {
  const [s, e] = row.split(" ")
  boardAndSnake[s] = Number(e)
})
const bridge = input.slice(1, 1 + N).map((row) => row.split(" ").map(Number))
const snake = input.slice(1 + N).map((row) => row.split(" ").map(Number))
// 주사위 나올 수 있는 값 1~6
const board = Array.from({ length: 101 }, () => 0)

// 2->93 : 1->2, 93 -> 99 -> 100 (3번)
// 4->99 : 1->4, 99 -> 100 (2번)
// 모든 경우 다 해야할 것 같음
const answer = []

const bfs = (boardAndSnake, answer) => {
  const queue = [1] // start, cnt
  // cnt = 0  주사위 굴린 횟수


  while (queue.length > 0) {
    const cur = queue.shift()
    if (cur == 100) {
      answer.push(board[100])
      continue
    }

    for (let move = 1; move <= 6; move++) {
      const nx = cur + move

      if (nx > 100) continue
      if (boardAndSnake[nx] != null) {
        if (
          board[boardAndSnake[nx]] == 0 ||
          (board[boardAndSnake[nx]] !== 0 &&
            board[boardAndSnake[nx]] > board[cur])
        ) {
          board[nx] = board[cur]+1  
          queue.push(boardAndSnake[nx])
          board[boardAndSnake[nx]] = board[nx]
        }
      } else {
        if (board[nx] == 0 || board[nx] > board[cur] + 1) {
          queue.push(nx)
          board[nx] = board[cur] + 1
        }
      }

    }
  }
}
bfs(boardAndSnake, answer)


console.log(Math.min(...answer))
