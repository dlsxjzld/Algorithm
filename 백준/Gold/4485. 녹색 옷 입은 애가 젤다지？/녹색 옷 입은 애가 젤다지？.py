import sys
from collections import deque
input = sys.stdin.readline

move = [
    (1, 0),
    (-1, 0),
    (0, 1),
    (0, -1),
]
answer = []
problem = 1

def bfs(sx, sy, N, graph):
    queue = deque([(sx, sy)])
    distance = [[float('inf')] * N for _ in range(N)]
    distance[sx][sy] = graph[sx][sy]

    while queue:
        x, y = queue.popleft()
        for dx, dy in move:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N:
                if distance[nx][ny] > distance[x][y] + graph[nx][ny]:
                    distance[nx][ny] = distance[x][y] + graph[nx][ny]
                    queue.append((nx, ny))
    return distance[N - 1][N - 1]

while True:
    N = int(input().strip())
    if N == 0:
        break
    graph = [list(map(int, input().strip().split())) for _ in range(N)]
    dist = bfs(0, 0, N, graph)
    answer.append(f"Problem {problem}: {dist}")
    problem += 1

print("\n".join(answer))
