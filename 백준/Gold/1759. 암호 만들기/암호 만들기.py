import sys
input = sys.stdin.readline

l, c = map(int, input().split())

array = sorted(input().split())
visited = [False]*c
# print(array)


def solve(password, idx):
    if len(password) == l:
        mocnt = 0
        for i in range(l):
            if password[i] in list('aeiou'):
                mocnt += 1

        if mocnt >= 1 and l-mocnt >= 2:
            print(''.join(password))
        return

    for i in range(idx, c):
        if not visited[i]:
            visited[i] = True
            password.append(array[i])
            solve(password, i+1)
            password.pop()
            visited[i] = False


for i in range(c-l+1):
    visited[i] = True
    solve([array[i]], i+1)
    visited[i] = False
