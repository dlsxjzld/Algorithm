from collections import deque
import sys
input = sys.stdin.readline

r, c = map(int, input().split())
maze = [list(input().rstrip()) for _ in range(r)]
distance = [[0 for _ in range(c)] for _ in range(r)]
visited = [[False for _ in range(c)]for _ in range(r)]


def bfs(position):
    # sx, sy, _ = position[0]
    queue = deque(position)
    # visited[sx][sy] = True

    while queue:
        x, y, type = queue.popleft()
        if (x == 0 or y == 0 or x == r-1 or y == c-1) and maze[x][y] != 'F' and type == 'J':
            return distance[x][y]+1
        dx = [1, 0, -1, 0]
        dy = [0, 1, 0, -1]
        # print("x,y,type : ", x, y, type)
        # for i in range(r):
        #     print(maze[i])
        # print()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if 0 <= nx < r and 0 <= ny < c and maze[nx][ny] != '#':
                if type == 'J':
                    if maze[nx][ny] == '.':
                        distance[nx][ny] = distance[x][y] + 1
                        # visited[nx][ny] = True
                        maze[nx][ny] = 'J'
                        # maze[x][y] = '.'
                        queue.append((nx, ny, 'J'))
                elif type == 'F':
                    if maze[nx][ny] != 'F':
                        maze[nx][ny] = 'F'
                        queue.append((nx, ny, 'F'))
    return False


x, y = 0, 0
pos = []
for i in range(r):
    for j in range(c):
        if maze[i][j] == 'J':
            pos.append((i, j, 'J'))

for i in range(r):
    for j in range(c):
        if maze[i][j] == 'F':
            pos.append((i, j, 'F'))

answer = bfs(pos)
if answer != False:
    print(answer)
else:
    print('IMPOSSIBLE')
