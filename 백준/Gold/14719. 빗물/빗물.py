import sys
input = sys.stdin.readline

h,w = map(int,input().split(' '))
heights = list(map(int,input().split(' ')))
answer = 0
for i in range(1,w-1):
  compare = min(max(heights[:i]),max(heights[i+1:]))
  value = compare - heights[i]
  answer += value if value > 0 else 0
print(answer)