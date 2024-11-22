import sys
input = sys.stdin.readline

n = int(input().strip())
data = [int(input().strip()) for _ in range(n)]

dp = [0] * n

for i in range(0,n):
  dp[i] = 1
  for j in range(0,i):
    if data[i] > data[j] and dp[j]+1 > dp[i] :
      dp[i] = dp[j]+1
print(n-max(dp))
  