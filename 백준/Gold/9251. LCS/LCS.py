import sys
input = sys.stdin.readline

row = list(input().strip())
col = list(input().strip())

dp = [[0 for _ in range(len(col)+1)] for _ in range(len(row)+1)]

for i in range(1,len(row)+1):
    for j in range(1,len(col)+1):
        if(row[i-1] == col[j-1]):
            dp[i][j] = dp[i-1][j-1] +1
        else:
            dp[i][j] = max(dp[i-1][j],dp[i][j-1])

print(max(map(max,dp)))