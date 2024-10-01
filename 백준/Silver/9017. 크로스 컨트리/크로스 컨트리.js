const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const t = Number(input[0])
const answer = []

const makeTeam = (number) => {
  const team = {
    number,
    sum: 0,
    fifth: 0,
  }
  return team
}

for (let tc = 0; tc < t; tc++) {
  // 점수 구할 팀 번호 구하기 -> 각 팀 번호가 6개 있는지
  // 팀 번호에 해당하는 팀은 4번째까지 값 더하고 5번째 팀원 점수 기록
  // 팀 점수 낮은 순서대로 정렬 후 같다면 5번째 팀원 점수가 더 낮은 팀으로 판단
  const n = Number(input[tc * 2 + 1])
  const teamNumber = input[tc * 2 + 2].split(" ").map(Number)

  const teamMemberCount = {}
  for (let i = 0; i < n; i++) {
    if (!teamMemberCount[teamNumber[i]]) {
      teamMemberCount[teamNumber[i]] = 0
    }
    teamMemberCount[teamNumber[i]] += 1
  }

  const validTeam = new Set(
    Object.entries(teamMemberCount)
      .filter(([number, cnt]) => cnt === 6)
      .map(([number, _]) => Number(number)),
  )
  const score = []
  let x = 1
  for (let i = 0; i < n; i++) {
    if (validTeam.has(teamNumber[i])) {
      score.push(x++)
    } else {
      score.push(0)
    }
  }

  const candidates = {}
  for (let i = 0; i < n; i++) {
    if (!validTeam.has(teamNumber[i])) {
      continue
    }

    if (!candidates[teamNumber[i]]) {
      candidates[teamNumber[i]] = {
        number: teamNumber[i],
        sum: 0,
        fifth: 0,
        cnt: 0,
      }
    }
    candidates[teamNumber[i]]["cnt"] += 1
    if (candidates[teamNumber[i]]["cnt"] < 5) {
      candidates[teamNumber[i]]["sum"] += score[i]
    }
    if (candidates[teamNumber[i]]["cnt"] === 5) {
      candidates[teamNumber[i]]["fifth"] = score[i]
    }
  }

  const filteredTeams = Object.values(candidates)
    .map(({ number, sum, fifth, _ }) => [number, sum, fifth])
    .sort((a, b) => a[1] - b[1] || a[2] - b[2])

  answer.push(filteredTeams[0][0])
}
console.log(answer.join("\n"))
