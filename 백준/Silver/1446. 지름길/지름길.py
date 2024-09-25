import sys

input = sys.stdin.readline

n,d = map(int , input().split(' '))

roads = sorted([list(map(int,input().split(' '))) for i in range(1,1+n)],key=lambda x:x[1])
dp = [i for i in range(0,d+1)]

for [s,e,v] in list(filter(lambda x:x[1]<=d, roads)):
  dp[e] = min(dp[e],dp[s]+v)
  for i in range(e+1,d+1):
    dp[i] = min(dp[i],dp[e]+i-e)

print(dp[d])