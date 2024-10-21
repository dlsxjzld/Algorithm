import sys
input = sys.stdin.readline

N = int(input())
heights = list(map(int,input().split()))
stack = []
result = [str(0) for _ in range(N)]

for i in range(N-1,-1,-1):
  while len(stack) >0 and heights[stack[-1]] <= heights[i]:
    cur = stack.pop()
    result[cur] = str(i+1)
  stack.append(i)

print(' '.join(result))