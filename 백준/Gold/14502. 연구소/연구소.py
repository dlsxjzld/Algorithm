from collections import deque
from copy import deepcopy

# bfs 바이러스 퍼짐


def bfs(graph):
    queue = deque()
    tmp_graph = deepcopy(graph)
    global answer
    cnt = 0
    # 상하좌우
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    for i in range(len(graph)):
        for j in range(len(graph[0])):
            if tmp_graph[i][j] == 2:  # 바이러스 찾아서 큐에 넣기
                queue.append((i, j))

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if tmp_graph[nx][ny] == 0:
                tmp_graph[nx][ny] = 2
                queue.append((nx, ny))
    for i in range(len(tmp_graph)):
        cnt += tmp_graph[i].count(0)
    answer = max(answer, cnt)

# 벽 만들기


def makeWall(graph, cnt):
    if cnt == 3:  # 벽 3개 다 만들면 바이러스 퍼트리기
        bfs(graph)
        return
    for i in range(len(graph)):
        for j in range(len(graph[0])):
            if graph[i][j] == 0:  # 빈 칸이면 벽으로 만들기
                graph[i][j] = 1
                makeWall(graph, cnt+1)
                graph[i][j] = 0


n, m = map(int, input().split())
graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))
answer = 0
makeWall(graph, 0)
print(answer)
