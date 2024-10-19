import sys
input = sys.stdin.readline

n = int(input())
L = list(map(int,input().split()))
J = list(map(int,input().split()))
dp  = [0 for i in range(0,101)]

# 인사하거나 안하거나

# dp[i] = i만큼의 체력이 있을 때 인사해서 얻은 기쁨의 양

for i in range(0,n):

  lost = L[i]
  joy = J[i]
  for hp in range(100,0,-1):
    if(hp > lost):
      dp[hp] = max(dp[hp-lost] + joy, dp[hp])

print(max(dp))