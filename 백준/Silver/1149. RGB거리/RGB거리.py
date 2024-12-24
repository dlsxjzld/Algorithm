import sys
input = sys.stdin.readline

n = int(input())
house = [[0, 0, 0]]+[list(map(int, input().split())) for _ in range(n)]
dp = [[0, 0, 0]] + [[0 for _ in range(3)] for _ in range(n)]
# print(house)
# print(dp)
dp[1][0] = house[1][0]
dp[1][1] = house[1][1]
dp[1][2] = house[1][2]

for i in range(2, n+1):
    dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + house[i][0]
    dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + house[i][1]
    dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + house[i][2]
# for i in range(n+1):
#     print(*dp[i])

print(min(dp[-1]))
