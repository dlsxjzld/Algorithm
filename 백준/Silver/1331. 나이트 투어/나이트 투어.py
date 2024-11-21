import sys

input = sys.stdin.read
data = input().strip().split("\n")

col = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
}

row = {
    '1': 0,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
}

y, x = data[0][0], data[0][1]
start_row = row[x]
start_col = col[y]
prev_row = start_row
prev_col = start_col

target = set(data)
visited = [[False] * 6 for _ in range(6)]
visited[start_row][start_col] = True
answer = "Invalid"

if len(target) != 36:
    print(answer)
    sys.exit()

for i in range(1, 36):
    c, r = data[i][0], data[i][1]
    cur_x, cur_y = row[r], col[c]
    if ((abs(cur_x - prev_row) == 1 and abs(cur_y - prev_col) == 2) or
        (abs(cur_x - prev_row) == 2 and abs(cur_y - prev_col) == 1)):
        if visited[cur_x][cur_y]:
            answer = "Invalid"
            break
        visited[cur_x][cur_y] = True
        prev_row, prev_col = cur_x, cur_y
    else:
        answer = "Invalid"
        break

last_y, last_x = data[35][0], data[35][1]
if (visited[row[last_x]][col[last_y]] and
    ((abs(row[last_x] - start_row) == 1 and abs(col[last_y] - start_col) == 2) or
     (abs(row[last_x] - start_row) == 2 and abs(col[last_y] - start_col) == 1))):
    answer = "Valid"
else:
    answer = "Invalid"

print(answer)
