import sys
input = sys.stdin.readline

n = int(input())
data = [list(input().strip()) for _ in range(1,n+1)]
original,*target = data
answer =0


for tar in target:
    ori = original[0:]
    t = tar[:]

    for char in tar:

      if char in ori:
        ori.remove(char)
        t.remove(char)
    if len(t) <=1 and len(ori) <=1:
        answer +=1

print(answer)
