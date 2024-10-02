import sys
input = sys.stdin.readline

n,k = map(int,input().split(' '))
data = list(input())
answer =0

for i in range(0,n):
  if data[i] == 'P':
    for j in range(i-k,i+k+1):
      if 0<=j <n and data[j] == 'H':
        answer += 1
        data[j] = 'X'
        break
print(answer)