import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
m = int(input())
graph = [ [0] * (n+1) for _ in range(n+1)]
visited = [0 for _ in range(n+1)]

for i in range(m):
    a,b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(x):
    q = deque()
    visited[x] = 1
    q.append(x)
    while q:
        a = q.popleft()
        for i in graph[a]:
            if visited[i] == 0:
                q.append(i)
                visited[i] = visited[a] + 1

bfs(1)
result = 0
for i in range(2,n+1):
    # 본인이거나 친구거나, 친구의 친구거나 경우의 수가 최대 3개
    if visited[i] < 4 and visited[i] != 0:
        result += 1
print(result)