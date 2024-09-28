import sys
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
visited = [[False for _ in range(m)] for _ in range(n)]

answer = 0
max_val = max(map(max, graph))


def dfs(start, dsum, cnt):
    global answer
    x, y = start
    if answer >= dsum + max_val*(4-cnt):
        return
    if cnt == 4:
        answer = max(answer, dsum)
        return
    dx = [-1, 1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if nx >= n or ny >= m or nx < 0 or ny < 0:
            continue
        if not visited[nx][ny]:
            if cnt == 2:
                visited[nx][ny] = True
                dfs((x, y), dsum+graph[nx][ny], cnt+1)
                visited[nx][ny] = False
            visited[nx][ny] = True
            dfs((nx, ny), dsum+graph[nx][ny], cnt+1)
            visited[nx][ny] = False


for i in range(n):
    for j in range(m):
        if not visited[i][j]:
            visited[i][j] = True
            dfs((i, j), graph[i][j], 1)
            visited[i][j] = False
print(answer)
