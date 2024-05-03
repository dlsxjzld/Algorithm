const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
let index = 1
for (let tc = 0; tc < T; tc++) {
  const [n, d] = input[index++].split(" ").map(Number)

  const graph = input
    .slice(index, index + n)
    .map((row) => row.split(" ").map(Number))
  index += n

  const turn = (_graph, endPoint, cnt) => {
    const tempGraph = _graph.map((row) => row.map((val) => val))
    const centerIndex = Math.floor(n / 2)

    for (let k = 0; k < endPoint; k++) {
      // 주대각 -> 가운데열
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i === j && i !== centerIndex) {
            tempGraph[i][centerIndex] = _graph[i][j]
          }
        }
      }
      // 가운데열 -> 부대각
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (j === centerIndex && i !== centerIndex) {
            tempGraph[i][n - i - 1] = _graph[i][centerIndex]
          }
        }
      }
      // 부대각 -> 가운데행
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (j === centerIndex && i !== centerIndex) {
            tempGraph[centerIndex][n - i - 1] = _graph[i][n - i - 1]
          }
        }
      }
      // 가운데행 -> 주대각
      for (let i = 0; i < n; i++) {
        tempGraph[i][i] = _graph[centerIndex][i]
      }

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          _graph[i][j] = tempGraph[i][j]
        }
      }
    }

      console.log(_graph.map((row) => row.join(" ")).join("\n"))
      
  }

  if (d > 0) {
    let degree = (d / 45) % 8
    turn(graph, degree, 0)
  } else {
    let degree = ((360 + d) / 45) % 8
    turn(graph, degree, 0)
  }
}
