import sys
from collections import deque
input = sys.stdin.readline

tc = int(input().strip())
answer =[]


move = [[1,0],[-1,0],[0,1],[0,-1]]
def bfs(targetPosition,graph,h,w,isFire=False):
  queue = deque(targetPosition)
  distance = [[1e6 for _ in range(w)] for _ in range(h)]
  for [x,y] in targetPosition:
    distance[x][y] = 1

  while(len(queue)>0):
    [x,y] = queue.popleft()
    for i in range(4):
      nx =x+move[i][0]
      ny =y+move[i][1]
      if nx<0 or ny<0 or nx>=h or ny>=w or graph[nx][ny] == '#' or distance[nx][ny] != 1e6: continue
      if(not isFire and graph[nx][ny] == '*'): continue
      distance[nx][ny] = distance[x][y] +1
      queue.append([nx,ny])

  return distance


  

def findAnswer(fire,start,h,w):
  tmp = []

  # 1행 마지막행 확인
  for i in range(w):
    if fire[0][i] > start[0][i]:
      tmp.append(start[0][i])
    if fire[h-1][i] > start[h-1][i]:
      tmp.append(start[h-1][i])
  
  # 1열 마지막열 확인
  for i in range(h):
    if fire[i][0] > start[i][0]:
      tmp.append(start[i][0])
    if fire[i][w-1] > start[i][w-1]:
      tmp.append(start[i][w-1])
  if(len(tmp) >0):
    return min(tmp)
  else:
    return 'IMPOSSIBLE'




for t in range(tc):
  w,h = map(int,input().split())
  graph = [list(input().strip()) for _ in range(h)]

  startPosition = []
  firePositions = []

  for i in range(h):
    for j in range(w):
      if(graph[i][j] == '@'):
        startPosition.append([i,j])
      elif (graph[i][j] == '*'):
        firePositions.append([i,j])

  fireDist = bfs(firePositions,graph,h,w,True)
  startDist = bfs(startPosition,graph,h,w)
  result = findAnswer(fireDist,startDist,h,w)
  print(result)


