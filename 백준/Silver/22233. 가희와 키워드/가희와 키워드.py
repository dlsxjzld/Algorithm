import sys
input = sys.stdin.readline

n, m = map(int, input().split())

memo = set([input().strip() for i in range(1,1+n)])


for i in range(m):
    keyword = list(map(str, input().strip().split(',')))
    for word in keyword:
        if word in memo:
            memo.remove(word)
        
    print(len(memo))

