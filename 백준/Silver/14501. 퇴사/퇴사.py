import sys
input = sys.stdin.readline

n = int(input())
counsel = [list(map(int,input().split(' '))) for _ in range(n)]

dp = [0] * n

for i in range(n):
  t,p = counsel[i]
  if i+t>n: continue
  dp[i] = dp[i]+p

  for j in range(i+t,n):
    dp[j] = max(dp[i],dp[j])

print(max(dp))


