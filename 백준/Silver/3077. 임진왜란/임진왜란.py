import sys

input = sys.stdin.readline

def solution(N, answer, stu):
    total = N * (N - 1) // 2
    book = {}
    for idx in range(N):
        book[stu[idx]] = idx
    ans = 0
    for i in range(N):
        for j in range(i + 1, N):
            if book[answer[i]] < book[answer[j]]:
                ans += 1
    return f'{ans}/{total}'

N = int(input())
answer = input().split()
stu = input().split()
print(solution(N, answer, stu))