import sys

input = sys.stdin.readline

n,k = map(int,input().split(' '))
dp = [0] * (k+1)

for i in range(n):
    w,v = map(int,input().split(' '))
    for j in range(k,w-1,-1):
        if(dp[j] < dp[j-w]+v):
            dp[j] = dp[j-w] +v
print(max(dp))