const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c] = input[0].split(" ").map(Number)

const graph = Array.from({ length: r + 2 }, () =>
  Array.from({ length: c + 2 }, () => "."),
)
const INPUT = input.slice(1).map((row) => row.split(""))

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= c; j++) {
    graph[i][j] = INPUT[i - 1][j - 1]
  }
}



const landToSeaPosition = []
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= c; j++) {
    let cnt = 0
    for (let k = 0; k < 4; k++) {
      if (graph[i + move[k][0]][j + move[k][1]] === ".") {
        cnt += 1
      }
    }
    if (cnt >= 3) {
      landToSeaPosition.push([i, j])
    }
  }
}

for (let [x, y] of landToSeaPosition) {
  graph[x][y] = "."
}

const row = []
const col = []
// 1행부터
for (let i = 1; i <= r; i++) {
  if (!graph[i].includes("X")) {
    row.push(i)
  } else {
    break
  }
}

// 1열부터
for (let i = 1; i <= c; i++) {
  let cnt = 0
  for (let j = 1; j <= r; j++) {
    if (graph[j][i] === ".") {
      cnt++
    }
  }
  if (cnt === r) {
    col.push(i)
  } else {
    break
  }
}

// r행부터
for (let i = r; i >= 1; i--) {
  if (!graph[i].includes("X")) {
    row.push(i)
  } else {
    break
  }
}

// c열부터
for (let i = c; i >= 1; i--) {
  let cnt = 0
  for (let j = 1; j <= r; j++) {
    if (graph[j][i] === ".") {
      cnt++
    }
  }
  if (cnt === r) {
    col.push(i)
  } else {
    break
  }
}
row.sort((a, b) => a - b)
col.sort((a, b) => a - b)

const answer =[]

for (let i = 1; i <= r; i++) {
    const temp = []
    if(row.includes(i)) continue
  for (let j = 1; j <= c; j++) {
      
    if (col.includes(j)) {
      continue
    }
    temp.push(graph[i][j])
  }
  answer.push(temp)
}

console.log(answer.map((row) => row.join("")).join("\n"))
