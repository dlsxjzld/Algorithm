import sys
input = sys.stdin.readline

n = int(input())
L = list(map(int,input().split()))
J = list(map(int,input().split()))
dp  = [[0 for i in range(0,101)] for _ in range(n+1)]


for i in range(1,n+1):
  lost = L[i-1]
  joy = J[i-1]

  for hp in range(1,101):
    if(hp <=lost):
      dp[i][hp] = dp[i-1][hp]
    else:
      dp[i][hp] = max(dp[i-1][hp], dp[i-1][hp-lost]+joy)

print(max(map(max,dp)))
