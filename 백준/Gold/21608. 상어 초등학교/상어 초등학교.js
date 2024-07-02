const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])

// 빈 칸에 학생들 채우기
const graph = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0),
)

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
] // 동 서 남 북

const findLike = (liked) => {
  // 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸 찾기

  // 현재 학생 자리에 배치

  // 빈 칸의 인접 칸에 좋아하는 학생 몇 명인지 확인하고 [빈칸의 행,열, 좋아하는 학생수, 빈칸수]
  const position = []
  let maximum_liked = 0

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (graph[r][c] === 0) {
        let likedCnt = 0
        let emptyCnt = 0
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [r + move[i][0], c + move[i][1]]
          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
          if (liked.includes(graph[nx][ny])) {
            likedCnt += 1
          }
          if (graph[nx][ny] === 0) {
            emptyCnt += 1
          }
        }
        maximum_liked = Math.max(maximum_liked, likedCnt)
        position.push([r, c, likedCnt, emptyCnt])
      }
    }
  }

  // 빈 칸 수로 내림차순 정렬

  const sortedPosition = position.filter(
    ([r, c, liked, empty]) => liked === maximum_liked,
  )

  sortedPosition.sort((a, b) => {
    if (b[3] > a[3]) {
      return 1
    } else if (b[3] < a[3]) {
      return -1
    } else {
      if (a[0] < b[0]) {
        return -1
      } else if (a[0] > b[0]) {
        return 1
      } else {
        if (a[1] < b[1]) {
          return -1
        } else if (a[1] > b[1]) {
          return 1
        } else {
          return 0
        }
      }
    }
  })
  

  return sortedPosition[0]
}

const likedDict = {}
for (let i = 1; i <= N ** 2; i++) {
  const data = input[i].split(" ").map(Number)
  const [student, liked] = [data[0], data.slice(1)]
  likedDict[student] = liked
  const [r, c, like, empty] = findLike(liked)
  graph[r][c] = student
}

let ssum = 0
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    let likedCnt = 0
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [r + move[i][0], c + move[i][1]]
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      if (likedDict[graph[r][c]].includes(graph[nx][ny])) {
        likedCnt += 1
      }
    }
    ssum += likedCnt === 0 ? 0 : 10 ** (likedCnt - 1)
  }
}

console.log(ssum)
