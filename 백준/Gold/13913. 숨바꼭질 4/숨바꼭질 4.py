import sys
from collections import deque
input = sys.stdin.readline

n, k = map(int, input().split())

graph = [0] * 100001
path = [0] * 100001


def check(end):
    result = []
    tmp = end
    for _ in range(graph[end]+1):
        result.append(tmp)
        tmp = path[tmp]

    print(' '.join(map(str, result[::-1])))


def bfs(start, end):
    queue = deque([start])
    while queue:
        x = queue.popleft()
        if x == end:
            print(graph[end])
            break
        for nx in [x-1, x+1, 2*x]:
            if 0 <= nx <= 100000 and graph[nx] == 0:
                graph[nx] = graph[x] + 1
                path[nx] = x
                queue.append(nx)


bfs(n, k)
check(k)
