import sys
input = sys.stdin.readline

R, C = map(int, input().strip().split())
graph = [list(input().strip()) for _ in range(R)]

visited = [False] * 26
answer = 1
visited[ord(graph[0][0]) - ord('A')] = True

moves = [
    (0, 1),
    (0, -1),
    (1, 0),
    (-1, 0),
]

def dfs(x, y, visited, cnt):
    global answer
    answer = max(answer, cnt)
    for dx, dy in moves:
        nx, ny = x + dx, y + dy
        if (
            0 <= nx < R and
            0 <= ny < C and
            not visited[ord(graph[nx][ny]) - ord('A')]
        ):
            visited[ord(graph[nx][ny]) - ord('A')] = True
            dfs(nx, ny, visited, cnt + 1)
            visited[ord(graph[nx][ny]) - ord('A')] = False

dfs(0, 0, visited, 1)
print(answer)
