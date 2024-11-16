import sys

input = sys.stdin.read().strip().split("\n")
price = list(map(int, input[0].split()))
times = [list(map(int, row.split())) for row in input[1:]]

visited = [0] * 101

for s, e in times:
    for i in range(s, e):
        visited[i] += 1

answer = 0
for visit in visited:
    if visit != 0:
        answer += price[visit - 1] * visit

print(answer)
