import sys
from collections import deque

input = sys.stdin.readline

# z, x, y 이동 방향
move = [
    (1, 0, 0), (-1, 0, 0),  # 상, 하
    (0, 1, 0), (0, -1, 0),  # 북, 남
    (0, 0, 1), (0, 0, -1)   # 동, 서
]

def bfs(graph, start_positions, L, R, C, end_position):
    queue = deque(start_positions)
    visited = [[[-1] * C for _ in range(R)] for _ in range(L)]
    
    # 시작 지점 방문 처리
    for z, x, y in start_positions:
        visited[z][x][y] = 0

    while queue:
        z, x, y = queue.popleft()
        for dz, dx, dy in move:
            nz, nx, ny = z + dz, x + dx, y + dy
            if 0 <= nz < L and 0 <= nx < R and 0 <= ny < C:
                if graph[nz][nx][ny] != "#" and visited[nz][nx][ny] == -1:
                    visited[nz][nx][ny] = visited[z][x][y] + 1
                    queue.append((nz, nx, ny))

    # 도착 지점의 거리 반환
    tz, tx, ty = end_position[0]
    return visited[tz][tx][ty]

answer = []

while True:
    # L, R, C 입력
    L, R, C = map(int, input().strip().split())
    if L == 0 and R == 0 and C == 0:
        break

    graph = []
    start_positions = []
    end_position = []

    # 3차원 그래프 입력 처리
    for i in range(L):
        layer = []
        for j in range(R):
            row = list(input().strip())
            layer.append(row)
        graph.append(layer)
        input()  # 빈 줄 건너뛰기

    # 시작점과 도착점 찾기
    for i in range(L):
        for j in range(R):
            for k in range(C):
                if graph[i][j][k] == "S":
                    start_positions.append((i, j, k))
                elif graph[i][j][k] == "E":
                    end_position.append((i, j, k))

    # BFS 실행
    result = bfs(graph, start_positions, L, R, C, end_position)
    if result == -1:
        answer.append("Trapped!")
    else:
        answer.append(f"Escaped in {result} minute(s).")

# 정답 출력
print("\n".join(answer))
