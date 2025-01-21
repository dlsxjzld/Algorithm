n = int(input())
mine = [list(input()) for _ in range(n)]
board = [list(input()) for _ in range(n)]
result = [['.'] * n for _ in range(n)]
dx = [-1, -1, -1, 0, 0, 1, 1, 1]
dy = [-1, 0, 1, -1, 1, -1, 0, 1]
 
for x in range(n):
    for y in range(n):
        if mine[x][y] == '.' and board[x][y] == 'x':    # 지뢰가 없으면서 열린 칸
            cnt = 0
            for i in range(8):
                nx = x + dx[i]
                ny = y + dy[i]
 
                if nx < 0 or ny < 0 or nx >= n or ny >= n:
                    continue
 
                if mine[nx][ny] == '*':
                    cnt += 1
            result[x][y] = cnt    # 19번의 조건 절을 통과하지 않아도 cnt 적용
 
        if mine[x][y] == '*' and board[x][y] == 'x':    # 지뢰가 있는 칸이 열렸다면
            for a in range(n):
                for b in range(n):
                    if mine[a][b] == '*':    # 첫번째 입력 중 지뢰가 있는 칸이면
                        result[a][b] = '*'    # 지뢰가 있는 모든 칸을 별표로 표시
                        
for i in range(n):
    for j in range(n):
        print(result[i][j], end='')
    print()