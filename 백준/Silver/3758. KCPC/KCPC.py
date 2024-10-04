import sys

input = sys.stdin.readline

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
  n,k,yourId,m = map(int,input().split(' '))
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

