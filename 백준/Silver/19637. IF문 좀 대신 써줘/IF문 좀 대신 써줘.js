const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const rankingForMedal = {}

// 점수 : 칭호 객체 생성
input.slice(1, 1 + n).forEach((row) => {
  const [medal, score] = row.split(" ")
  if (rankingForMedal[score] == null) {
    rankingForMedal[score] = medal
  }
})

// 점수 값들만 가진 ranking 배열 만들기
const ranking = Object.keys(rankingForMedal).map((value) => Number(value))

const userScoreList = input.slice(1 + n).map((val) => Number(val))

const answer = []

const checkScore = (targetScore) => {
  let start = 0
  let end = ranking.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    
    if (targetScore <= ranking[mid]) {
      if (mid !== 0) {
        if (ranking[mid - 1] < targetScore) {
          answer.push(rankingForMedal[ranking[mid]])
          break
        }
      } else {
        answer.push(rankingForMedal[ranking[0]])
        break
      }
      end = mid - 1
    } else if (targetScore >= ranking[mid]) {
      start = mid + 1
    }
  }
}

for (let userScore of userScoreList) {
  checkScore(userScore)
}

console.log(answer.join("\n"))
