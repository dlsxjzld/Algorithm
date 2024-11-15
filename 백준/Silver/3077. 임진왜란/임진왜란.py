import sys
input = sys.stdin.readline

N = int(input().strip())
my = input().strip().split()
real = input().strip().split()

check = {value: index for index, value in enumerate(real)}

cnt = 0
for i in range(N):
    for j in range(i + 1, N):
        if check[my[i]] < check[my[j]]:
            cnt += 1

print(f"{cnt}/{(N * (N - 1)) // 2}")
