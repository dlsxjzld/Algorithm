import sys
input = sys.stdin.readline

numbers = [list(map(int, line.split())) for line in sys.stdin.read().strip().split("\n")]

answer = set()

for x1, y1, x2, y2 in numbers:
    graph = [[False] * 101 for _ in range(101)]
    for sx in range(y1, y2 + 1):
        for sy in range(x1, x2 + 1):
            graph[sx][sy] = True
            if graph[sx][sy] and graph[sx][sy - 1] and graph[sx - 1][sy - 1] and graph[sx - 1][sy]:
                answer.add(f"{sx}{sy}{sx - 1}{sy - 1}")

print(len(answer))
