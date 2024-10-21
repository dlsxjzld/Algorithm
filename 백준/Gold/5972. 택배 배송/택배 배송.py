import sys
import heapq

input = sys.stdin.readline

n,m = map(int,input().split())
lines = [list(map(int,input().split())) for _ in range(m)]
graph = [[] for _ in range(n+1)]
distance = [1e9] * (n+1)

for [a,b,c] in lines:
  graph[a].append([b,c])
  graph[b].append([a,c])

def dijkstra(graph,distance):
  heap = []
  distance[1] = 0

  heapq.heappush(heap,[0,1,0])

  while(len(heap) > 0):
    [_,cur,dist] = heapq.heappop(heap)

    if distance[cur] < dist: continue

    for [nx,nextDist] in graph[cur]:
      cost = dist+nextDist
      if(distance[nx] > cost):
        distance[nx] = cost
        heapq.heappush(heap,[cost,nx,cost])
dijkstra(graph,distance)
print(distance[n])

