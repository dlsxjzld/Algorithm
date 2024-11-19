import sys
input = sys.stdin.readline

MAX_LEN = 101
numbers = [list(map(int, line.split())) for line in sys.stdin.read().strip().split("\n")]

arr = [[False] * MAX_LEN for _ in range(MAX_LEN)]
cnt = 0

for x1, y1, x2, y2 in numbers:
    for x in range(x1, x2):
        for y in range(y1, y2):
            if arr[x][y]:
                continue
            arr[x][y] = True
            cnt += 1

print(cnt)
