import sys

input = sys.stdin.readline

n,m = map(int,input().strip().split(' '))
costs = []

for i in range(0,n):
  p,l = map(int,input().strip().split(' '))
  miles = sorted(list(map(int,input().strip().split(' '))),reverse=True)
  if(p>=l):
    costs.append(miles[l-1])
  else:
    costs.append(1)

costs.sort()

cnt = 0
for cost in costs:
  if m>= cost:
    m-=cost
    cnt+=1
  else:
    break
print(cnt)
  