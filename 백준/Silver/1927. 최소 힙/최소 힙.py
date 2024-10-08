import sys
input = sys.stdin.readline
import heapq


heap =[]
n = int(input())
answer = []
for i in range(n):
  num = int(input())
  if(num ==0):
    if(len(heap) == 0):
      answer.append('0')
    else:
      answer.append(str(heapq.heappop(heap)))
    
  else:
    heapq.heappush(heap,num)
print('\n'.join(answer))

