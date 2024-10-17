import sys
input = sys.stdin.readline

N,d,k,c = map(int,input().split())
sushi = [int(input()) for i in range(N)]
check = {}
cnt = 0
answer = -1e9

for i in range(0,k):
  if(check.get(sushi[i]) == None):
    check[sushi[i]] = 0
    cnt+=1
  check[sushi[i]] +=1
    
if(check.get(c) == None):
    cnt+=1
    check[c] = 0
check[c] += 1
answer = max(answer,cnt)


for i in range(1,N):
  check[sushi[i-1]] -= 1
  if(check[sushi[i-1]] == 0):
    del check[sushi[i-1]]
    cnt -=1

  if(check.get(sushi[(i+k-1)%N]) == None):
    check[sushi[(i+k-1)%N]] =0
    cnt +=1
  check[sushi[(i+k-1)%N]] +=1
  answer = max(answer,cnt)
  
print(answer)