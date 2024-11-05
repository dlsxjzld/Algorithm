import sys
input = sys.stdin.readline

n = int(input())
room = [list(input().rstrip()) for _ in range(n)]

w, h = 0, 0
# 가로
for i in range(n):
    cnt = 0
    for j in range(n):
        if room[i][j] == '.':
            cnt += 1
        if room[i][j] == 'X':
            if cnt >= 2:
                w += 1
            cnt = 0
    if cnt >= 2:
        w += 1
# 세로
for i in range(n):
    cnt = 0
    for j in range(n):
        if room[j][i] == '.':
            cnt += 1
        if room[j][i] == 'X':
            if cnt >= 2:
                h += 1
            cnt = 0
    if cnt >= 2:
        h += 1
print(w, h)
