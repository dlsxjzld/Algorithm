const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
let index = 1
for (let tc = 0; tc < T; tc++) {
  const [n, d] = input[index++].split(" ").map(Number)
  // 45, -315 -> 1
  // 90, -270 -> 2
  // 135, -225 -> 3
  // 180, -180 -> 4
  // 225, -135 -> 5
  // 270, -90 -> 6
  // 315, -45 -> 7
  // 360, -360 -> 그대로

  const graph = input
    .slice(index, index + n)
    .map((row) => row.split(" ").map(Number))
  index += n

  const turn = (_graph, endPoint, cnt) => {
    if (endPoint == 0 || cnt == endPoint) {
      console.log(_graph.map((row) => row.join(" ")).join("\n"))
      return
    }

    const tempGraph = _graph.map((row) => row.map((val) => val))
    const centerIndex = Math.floor(n / 2)

    // 주대각 -> 가운데
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
    turn(tempGraph, endPoint, cnt + 1)
  }
  if (d > 0) {
    let degree = (d / 45) % 8
    turn(graph, degree, 0)
  } else {
    let degree = ((360 + d) / 45) % 8
    turn(graph, degree, 0)
  }
}
