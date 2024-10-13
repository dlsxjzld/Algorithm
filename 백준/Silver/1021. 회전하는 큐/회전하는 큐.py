import sys
from collections import deque

input = sys.stdin.readline


n, m = map(int, input().split())
queue = deque([i for i in range(1, n+1)])
nums = list(map(int, input().split()))
answer = 0

for i in range(len(nums)):
    if queue.index(nums[i]) < len(queue)-queue.index(nums[i]):

        answer += queue.index(nums[i])
        queue.rotate(-queue.index(nums[i]))

    else:

        answer += len(queue)-queue.index(nums[i])
        queue.rotate(len(queue)-queue.index(nums[i]))

    queue.popleft()

print(answer)
