const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
let index = 1
for (let tc = 0; tc < T; tc++) {
  const [n, k, t, m] = input[index++].split(" ").map(Number) // 팀의 개수, 문제의 개수, 당신 팀의 ID, 로그 엔트리의 개수
  const rankingList = Array.from({ length: n + 1 }, (_, index) => ({
    teamId: index,
    score: 0,
    submitCnt: 0,
    lastSubmitTime: 0,
  }))

  const finalScoreList = Array.from({ length: n + 1 }, () =>
    Array.from({ length: k + 1 }, () => 0),
  )

  for (let start = index; start < index + m; start++) {
    const [i, j, s] = input[start].split(" ").map(Number)
    finalScoreList[i][j] = Math.max(finalScoreList[i][j], s)
    rankingList[i].submitCnt += 1
    rankingList[i].lastSubmitTime = start - index + 1
  }
  index += m

  for (let i = 1; i < n + 1; i++) {
    const teamScore = finalScoreList[i].reduce((prev, ssum) => prev + ssum, 0)
    rankingList[i].score = teamScore
  }

  rankingList.sort((team1, team2) => {
    if (team1.score == team2.score) {
      if (team1.submitCnt == team2.submitCnt) {
        if (team1.lastSubmitTime > team2.lastSubmitTime) {
          return 1
        } else {
          return -1
        }
      } else if (team1.submitCnt > team2.submitCnt) {
        return 1
      }
      return -1
    } else if (team1.score > team2.score) {
      return -1
    }
    return 1
  })

  console.log(rankingList.findIndex((team) => team.teamId === t) + 1)
}
