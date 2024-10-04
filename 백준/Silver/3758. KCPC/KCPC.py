import sys

input = sys.stdin.readline

# id, 문제 번호, 점수 -> 시간 순서대로 저장
# 한 문제에 대한 풀이를 여러 번 제출 가능 -> 그 중 최고 점수가 최종 점수
# 풀이를 한번도 제출하지 않으면 최종 점수는 0

# 팀의 최종 점수는 각 문제에 대해 받은 점수의 총합, 순위는 당신 팀보다 높은 점수를 받은 팀의 수 + 1
# 점수가 동일하면
# 1. 풀이를 제출한 횟수가 적은 팀의 순위가 높다
# 2. 제출 횟수도 같다면, 마지막 제출 시간이 더 빠른 팀의 순위가 높다.

T = int(input())

def getTeamInfo (teamId,problemCnt):
  team = {
    "id":teamId,
    "score": [0 for _ in range(0,problemCnt+1)],
    'logCnt':0,
    'lastCommit':0
  }
  return team

answer =[]
for tc in range(0,T):
  # 팀의 개수, 문제의 개수, 당신 팀의 ID, 로그 엔트리의 개수
  n,k,yourId,m = map(int,input().split(' '))
  
  # log -> [1,1,30] -> 팀 ID, 문제 번호, 획득 점수
  logs = [list(map(int,input().split(' '))) for _ in range(0,m)]
  teams = [getTeamInfo(i,k) for i in range(1,n+1)]

  for [idx,[teamId,problemNumber,score]] in enumerate(logs):
    teams[teamId-1]['score'][problemNumber] = max(teams[teamId-1]['score'][problemNumber],score)
    teams[teamId-1]['logCnt'] +=1
    teams[teamId-1]['lastCommit'] = idx
  
  teams.sort(key= lambda x: (sum(x['score']), -x['logCnt'],-x['lastCommit']))
  for [idx,team] in enumerate(teams):
    if yourId == team['id']:
      answer.append(str(n-idx))
      break
print('\n'.join(answer))

