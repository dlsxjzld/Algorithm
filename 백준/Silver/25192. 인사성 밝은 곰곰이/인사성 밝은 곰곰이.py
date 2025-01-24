import sys

input = sys.stdin.readline

n = int(input())
answer =0
nicknames = set()

strs = [input().strip() for i in range(n)]

for i in strs:
    if(i == 'ENTER'):
        answer += len(nicknames)
        nicknames.clear()
    else:
        nicknames.add(i)

answer +=len(nicknames)
print(answer)