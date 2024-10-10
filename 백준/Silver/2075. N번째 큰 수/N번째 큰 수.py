import sys
import heapq
input = sys.stdin.readline

n = int(input())

heap = []
for i in range(0,n):
  numbers= map(int,input().split())
  for num in numbers:
    heapq.heappush(heap,num)
    if(len(heap) > n): heapq.heappop(heap)
print((heap[0]))
