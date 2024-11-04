import sys
input = sys.stdin.readline

n = int(input())
A = list(map(int, input().split()))
MAX = 0
visited = [False for _ in range(n)]
answer = []


def back():
    global MAX
    if len(answer) == n:
        total = 0
        for i in range(n-1):
            total += abs(answer[i]-answer[i+1])
        MAX = max(MAX, total)
        return
    for i in range(n):
        if not visited[i]:
            visited[i] = True
            answer.append(A[i])
            back()
            visited[i] = False
            answer.pop()


back()
print(MAX)
