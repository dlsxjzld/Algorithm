import sys
input = sys.stdin.readline

t, w = map(int, input().split())
trees = [int(input()) for _ in range(t)]

dp = [[0] * (w + 1) for _ in range(t)]

for j in range(w + 1):
    tree = trees[0]
    if tree == 1:
        dp[0][j] = 0 if j % 2 == 1 else 1
    else:
        dp[0][j] = 1 if j % 2 == 1 else 0

for i in range(1, t):
    tree = trees[i]
    
    dp[i][0] = dp[i - 1][0] + (1 if tree == 1 else 0)
    
    for j in range(1, w + 1):
        dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - 1])
        if j % 2 == 0 and tree == 1:
            dp[i][j] += 1
        elif j % 2 == 1 and tree == 2:
            dp[i][j] += 1

print(max(dp[t - 1]))
