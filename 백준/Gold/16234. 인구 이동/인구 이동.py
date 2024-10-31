import sys
from collections import deque

input = sys.stdin.readline
N,L,R = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(N)]

day = 0
move = [[0,1],[1,0],[0,-1],[-1,0]]

def bfs(sx,sy,graph,visited):
  queue = deque([[sx,sy]])
  needVisit = [[sx,sy]]
  while len(queue):
    x,y = queue.popleft()
    for i in range(4):
      nx = x+move[i][0]
      ny = y+move[i][1]
      if nx<0 or ny<0 or nx>=N or ny>=N or visited[nx][ny]: continue
      diff = abs(graph[x][y] - graph[nx][ny])
      if(diff<L or diff>R): continue
      queue.append([nx,ny])
      needVisit.append([nx,ny])
      visited[nx][ny] = True
  return needVisit

while True:
  visited = [[False for _ in range(N)] for _ in range(N)]
  target = []
  for i in range(N):
    for j in range(N):
      if(not visited[i][j]):
        visited[i][j] = True
        needVisit = bfs(i,j,graph,visited)
        if(len(needVisit) != 1):
          target.append([*needVisit])
  
  for queue in target:
    total =0
    for [x,y] in queue:
        total += graph[x][y]
    newCount = total//(len(queue))

    for [x,y] in queue:
      graph[x][y] = newCount

  if(len(target) == 0):
    break
  day+=1
print(day)


