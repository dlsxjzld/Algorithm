import sys
input = sys.stdin.readline

n, m = map(int, input().split())

memo = set([input().strip() for i in range(1,1+n)])
answer =[]

for i in range(m):
    keyword = set(input().strip().split(','))
    memo -= keyword
    answer.append(str(len(memo)))
print('\n'.join(answer))

