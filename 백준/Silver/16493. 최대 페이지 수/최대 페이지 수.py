import sys
input = sys.stdin.readline

N,M = map(int,input().split())
books = [list(map(int,input().split())) for _ in range(M)]

dp = [0] *(N+1)

for i in range(M):
  day,page = books[i]

  for j in range(N,0,-1):
    if(j>=day):
      dp[j] = max(dp[j],dp[j-day]+page)
print(max(dp))