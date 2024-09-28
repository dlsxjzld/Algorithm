import sys
input = sys.stdin.readline

n,x = map(int,input().split())
numbers = list(map(int,input().split()))

current = sum(numbers[:x])
answer = current
cnt = 1

for i in range(1,n-x+1):
  current = current-numbers[i-1]+numbers[i+x-1]
  if current > answer:
    answer = current
    cnt = 1
  elif current == answer:
    cnt +=1
print('SAD' if answer == 0 else '{0}\n{1}'.format(answer,cnt))
  