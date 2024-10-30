import sys
input = sys.stdin.readline

n,k = map(int,input().split())
coins = [int(input()) for _ in range(n)]

dp = [1e9 for _ in range(k+1)]
dp[0] = 0
for coin in coins:
  for i in range(coin,k+1):
    dp[i] = min(dp[i],dp[i-coin]+1)

print(-1 if dp[k] == 1e9 else dp[k])
