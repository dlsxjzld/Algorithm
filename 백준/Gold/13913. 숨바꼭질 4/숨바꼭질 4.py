import sys
from collections import deque
input = sys.stdin.readline

n,k = map(int,input().split())
MAX = 100_001
graph = [-1] * MAX
path = [-1] * MAX

def bfs (start,end,graph,path):
  queue = deque([start])
  graph[start] = 0

  while queue:
    cur = queue.popleft()
    if cur == end: return

    for nx in [cur-1,cur+1,cur*2]:
      if nx<0 or nx>=MAX or graph[nx] !=-1: continue
      queue.append(nx)
      graph[nx] = graph[cur] +1
      path[nx] = cur

def getPath(path,start,cnt):
  answer = [str(start)]
  index = start
  for i in range(cnt):
    nx = path[index]
    answer.append(str(nx))
    index = nx
  return ' '.join(answer[::-1])

bfs(n,k,graph,path)
print(graph[k])
print(getPath(path,k,graph[k]))

