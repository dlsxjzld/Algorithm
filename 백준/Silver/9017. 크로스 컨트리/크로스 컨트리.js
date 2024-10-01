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

  const tmp = {}
  for (let i = 0; i < n; i++) {
    if (tmp[teamNumber[i]] == undefined) {
      tmp[teamNumber[i]] = 1
    } else {
      tmp[teamNumber[i]] += 1
      
    }
  }
  const real_team = new Set(Object.entries(tmp).filter(([number,cnt]) => cnt === 6).map(([number,_])=>Number(number)))
  const score = []
  let x=1
  for(let i=0;i<n;i++){
    if(real_team.has(teamNumber[i])){
      score.push(x++)
    }else{
      score.push(0)
    }
  }

  const candidates = {}
  for (let i = 0; i < n; i++) {
    if (candidates[teamNumber[i]] == undefined) {
      candidates[teamNumber[i]] = {
        number: teamNumber[i],
        sum: score[i],
        fifth: 0,
        cnt: 1,
      }
    } else {
      candidates[teamNumber[i]]["cnt"] += 1
      if (candidates[teamNumber[i]]["cnt"] === 6)  continue
    if(candidates[teamNumber[i]]['cnt']<5){
        
      candidates[teamNumber[i]]["sum"] += score[i]
    }
      if (candidates[teamNumber[i]]["cnt"] === 5) {
        candidates[teamNumber[i]]["fifth"] = score[i]
      }
    }
  }


  const filteredTeams = Object.values(candidates)
    .filter(({number,sum,fifth ,cnt}) => cnt === 6)
    .map(({number,sum,fifth,_}) => [number,sum,fifth]).sort((a,b)=>a[1]-b[1] || a[2] - b[2])

  answer.push(filteredTeams[0][0])
}
console.log(answer.join('\n'))
