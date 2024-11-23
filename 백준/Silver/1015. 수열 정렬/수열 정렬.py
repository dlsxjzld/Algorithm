import sys
input = sys.stdin.readline

# 입력 처리
N = int(input().strip())
A = list(map(int, input().strip().split()))

# B = [1,2,3]이 되어야 함
B = sorted(A)
visited = [False] * N
P = []

for value in A:
    for i in range(N):
        if visited[i]:
            continue
        if B[i] == value:
            P.append(i)
            visited[i] = True
            break

print(" ".join(map(str, P)))
