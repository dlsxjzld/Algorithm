import sys
input = sys.stdin.readline

# 입력 처리
n, m = map(int, input().strip().split())
values = [[0] * m] + [list(map(int, input().strip().split())) for _ in range(n)]

# DP 테이블 초기화 (n+1 x m+2 x 3 크기)
dp = [[[1000000] * 3 for _ in range(m + 2)] for _ in range(n + 1)]

# 초기 조건
for i in range(1, m + 1):
    for j in range(3):
        dp[0][i][j] = 0

# DP 계산
for r in range(1, n + 1):
    for c in range(1, m + 1):
        dp[r][c][0] = values[r][c - 1] + min(dp[r - 1][c - 1][1], dp[r - 1][c - 1][2])
        dp[r][c][1] = values[r][c - 1] + min(dp[r - 1][c][0], dp[r - 1][c][2])
        dp[r][c][2] = values[r][c - 1] + min(dp[r - 1][c + 1][0], dp[r - 1][c + 1][1])

# 결과 출력
print(min(min(dp[n][c]) for c in range(1, m + 1)))
