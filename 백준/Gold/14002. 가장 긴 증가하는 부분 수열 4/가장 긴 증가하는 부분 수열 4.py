import sys
input = sys.stdin.readline

n = int(input())
array = list(map(int, input().split()))
dp = [1 for _ in range(n)]

for i in range(1, n):
    for j in range(i):
        if array[i] > array[j]:
            dp[i] = max(dp[i], dp[j]+1)

print(max(dp))
cnt = max(dp)
end = dp.index(max(dp))
result = []
for i in range(end, -1, -1):
    if dp[i] == cnt:
        result.append(array[i])
        cnt -= 1
print(*result[::-1])
