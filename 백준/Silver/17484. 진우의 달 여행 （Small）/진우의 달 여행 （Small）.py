import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[0 for _ in range(m)]]+[list(map(int, input().split()))
                                 for _ in range(n)]
dp = [[[0 for _ in range(3)] for _ in range(m)] for _ in range(n+1)]


for i in range(1, n+1):
    for j in range(m):
        if j == 0:
            dp[i][j][1] = dp[i-1][j+1][0]+graph[i][j]
            dp[i][j][2] = min(dp[i-1][j][1], dp[i-1][j+1][0])+graph[i][j]
        elif j == m-1:
            dp[i][j][0] = min(dp[i-1][j][1], dp[i-1][j-1][2])+graph[i][j]
            dp[i][j][1] = dp[i-1][j-1][2]+graph[i][j]
        else:
            dp[i][j][0] = min(dp[i-1][j][1], dp[i-1][j-1][2])+graph[i][j]
            dp[i][j][1] = min(dp[i-1][j-1][2], dp[i-1][j+1][0])+graph[i][j]
            dp[i][j][2] = min(dp[i-1][j+1][0], dp[i-1][j][1])+graph[i][j]

answer = int(1e9)
for i in range(m):
    for j in range(3):
        if dp[n][i][j] != 0:
            answer = min(answer, dp[n][i][j])
print(answer)
