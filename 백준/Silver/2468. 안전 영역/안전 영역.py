from collections import deque
from copy import deepcopy


def bfs(start, tmp_graph, height):
    x, y = start
    queue = deque([(x, y)])
    n = len(graph)
    tmp_graph[x][y] = height
    dx = [-1, 1, 0, 0]
    dy = [0, 0, 1, -1]
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= n:
                continue
            if tmp_graph[nx][ny] > height:
                tmp_graph[nx][ny] = height
                queue.append((nx, ny))


n = int(input())
tmp_max = []
graph = []
for i in range(n):
    tmp = list(map(int, input().split()))
    graph.append(tmp)
    tmp_max.extend((tmp))

# print(graph)
result = []
cnt = 0
MAX = max((tmp_max))
# print(MAX)
for i in range(0, MAX+1):
    tmp_graph = deepcopy(graph)
    for j in range(n):
        for k in range(n):
            if tmp_graph[j][k] > i:
                bfs((j, k), tmp_graph, i)
                cnt += 1
    result.append(cnt)
    cnt = 0
# print(result)
print(max(result))
