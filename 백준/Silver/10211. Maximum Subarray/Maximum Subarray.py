import sys
input = sys.stdin.readline

t = int(input().strip())
answer = []
for tc in range(0,t): 
  n = int(input().strip())
  numbers = list(map(int,input().strip().split(" ")))
  dp = numbers[:]

  for i in range(1,n):
    if (dp[i] + dp[i - 1] > dp[i]):
      dp[i] += dp[i - 1]
  answer.append(str(max(dp)))

print('\n'.join(answer))
