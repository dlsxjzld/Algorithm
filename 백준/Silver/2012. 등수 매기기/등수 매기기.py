import sys

input = sys.stdin.readline

n = int(input())
visited = [i for i in range(1,1+n)]
nums = sorted([int(input()) for _ in range(n)])

result =0
for i in range(n):
    result +=abs(nums[i]-visited[i])

print(result)







