import sys
input = sys.stdin.readline

t = int(input())
num = [int(input()) for i in range(t)]
dp = [0 for i in range(11)]

dp[1] = 1
dp[2] = 2
dp[3] = 4

for i in range(4,11):
  dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

for n in num:
  print(dp[n])