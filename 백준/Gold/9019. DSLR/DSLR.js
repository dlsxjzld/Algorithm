const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const answer = []
const move = ["D", "S", "L", "R"]

const action = {
  D(n) {
    return (n * 2) % 10000
  },
  S(n) {
    return n - 1 < 0 ? 9999 : n - 1
  },
  L(n) {
    const head = Math.floor(n / 1000)
    const rest = n % 1000

    return rest * 10 + head
  },
  R(n) {
    const tail = n % 10
    const rest = Math.floor(n / 10)

    return tail * 1000 + rest
  },
}
const bfs = (A, B, candidateAnswer) => {
  const queue = [[A, ""]]
  const visited = Array.from({ length: 10000 }, () => false)
  let index = 0
  while (queue.length > index) {
    const [cur, moves] = queue[index++]
    if (cur === B) {
      candidateAnswer.push(moves)
      return
    }
    for (let i = 0; i < 4; i++) {
      const nx = action[move[i]](cur)

      if (!visited[nx]) {
        visited[nx] = true
        queue.push([nx, moves + move[i]])
      }
    }
  }
}

for (let tc = 1; tc <= T; tc++) {
  const [A, B] = input[tc].split(" ").map(Number)
  const candidateAnswer = []

  bfs(A, B, candidateAnswer)
  candidateAnswer.sort((a, b) => a.length - b.length)
  answer.push(candidateAnswer[0])
}

console.log(answer.join("\n"))
