const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, l, r] = input[0].split(" ").map(Number)
let graph = input.slice(1, 1 + n).map((row) => row.split(" ").map(Number))

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]
let day = 0

while (true) {
  let flag = false
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false),
  )

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        const queue = [[i, j]]
        visited[i][j] = true
        const countries = [[i, j]]
        let people = graph[i][j]

        const dx = [0, 0, 1, -1]
        const dy = [1, -1, 0, 0]

        while (queue.length > 0) {
          const [x, y] = queue.shift()

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]

            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < n &&
              ny < n &&
              !visited[nx][ny] &&
              Math.abs(graph[x][y] - graph[nx][ny]) >= l &&
              Math.abs(graph[x][y] - graph[nx][ny]) <= r
            ) {
              visited[nx][ny] = true
              queue.push([nx, ny])
              countries.push([nx, ny])
              people += graph[nx][ny]
              flag = true
            }
          }
        }

        const newPeople = Math.floor(people/(countries.length))
        countries.forEach(([nx,ny])=>{
          graph[nx][ny] = newPeople
        })
      }
    }
  }
  if (flag === false) {
    break
  }
  day += 1
}
console.log(day)
