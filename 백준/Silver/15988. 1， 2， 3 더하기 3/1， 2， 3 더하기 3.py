import sys
input = sys.stdin.readline

dp = [0,1,2,4,7]
for tc in range(int(input())):
    n = int(input())
    for i in range(len(dp), n+1):
        dp.append((dp[-3] + dp[-2] + dp[-1]) % 1000000009)
    print(dp[n])
