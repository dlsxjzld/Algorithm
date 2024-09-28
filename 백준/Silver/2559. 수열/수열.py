import sys

input = sys.stdin.readline

n,k = map(int,input().split(' '))
numbers = list(map(int,input().split(' ')))

current = sum(numbers[:k])
answer = current

for i in range(1,n-k+1):
  current = current - numbers[i-1] + numbers[i+k-1]
  answer = max(answer,current)

print(answer)