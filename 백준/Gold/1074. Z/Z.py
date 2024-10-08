import sys
input = sys.stdin.readline

n, r, c = map(int, input().split())
answer = 0


def solve(l, x, y):
    global answer
    if l < 0:
        return

    if x < (2**l) and y < (2**l):  # 제 1사분면
        answer += 0
    elif x < (2**l) and y >= (2**l):  # 제 2사분면
        answer += (2**l) * (2**l)
        y -= (2**l)
    elif x >= (2**l) and y < (2**l):  # 제 3사분면
        answer += (2**l) * (2**l) * 2
        x -= (2**l)
    if x >= (2**l) and y >= (2**l):  # 제 4사분면
        answer += (2**l) * (2**l) * 3
        x -= (2**l)
        y -= (2**l)
    solve(l-1, x, y)


solve(n-1, r, c)
print(answer)
