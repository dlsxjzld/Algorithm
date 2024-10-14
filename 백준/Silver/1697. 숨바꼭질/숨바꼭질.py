from collections import deque
import sys


def bfs(start, end):
    queue = deque([])
    queue.append(start)
    while queue:
        x = queue.popleft()
        dx = [x-1, x+1, x*2]
        if x == end:
            return dist[end]
        for i in dx:
            if 0 <= i <= MAX and dist[i] == 0:
                dist[i] = dist[x]+1
                queue.append(i)


n, k = map(int, sys.stdin.readline().split())
MAX = 10**5
dist = [0]*(MAX+1)
print(bfs(n, k))
