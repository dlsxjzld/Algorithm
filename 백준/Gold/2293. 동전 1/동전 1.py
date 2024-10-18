import sys
input = sys.stdin.readline

n,k = map(int,input().split())
coins = [int(input()) for _ in range(n)]
dp = [0] * (k+1)

for coin in coins:
  if(coin >k): continue
  dp[coin] +=1
  for i in range(coin,k+1):
    dp[i] = dp[i] +dp[i-coin]
print(dp[k])