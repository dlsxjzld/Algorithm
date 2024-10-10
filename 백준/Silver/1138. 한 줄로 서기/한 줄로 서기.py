import sys
input = sys.stdin.readline

n = int(input())
height = list(map(int,input().split()))

answer =[str(n)]

for i in range(n-2,-1,-1):
  if(height[i] ==0):
    answer = [str(i+1)] +answer
  else:
    answer = answer[0:height[i]]+[str(i+1)]+answer[height[i]:]
print(' '.join(answer))