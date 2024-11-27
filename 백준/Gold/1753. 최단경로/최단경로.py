import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)

v, e = map(int, input().split())
k = int(input())
graph = [[] for _ in range(v+1)]
distance = [INF for _ in range(v+1)]

for i in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))


def dijkstra(start):
    heap = []
    heapq.heappush(heap, (0, start))
    distance[start] = 0
    while heap:
        dist, now = heapq.heappop(heap)
        if distance[now] < dist:
            continue
        for node, edge in graph[now]:
            cost = dist+edge
            if cost < distance[node]:
                distance[node] = cost
                heapq.heappush(heap, (cost, node))
            # print(node, edge)


dijkstra(k)
for i in range(1, v+1):
    if distance[i] == INF:
        print("INF")
    else:
        print(distance[i])
