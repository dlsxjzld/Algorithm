n = int(input())
arr = []
for i in range(n):
  w,h = map(int,input().split())
  arr.append([w,h])


answer = [0 for i in range(n)]
for i in range(n):
  for j in range(n):
    if arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]:
      answer[i] +=1

for i in range(n):
  print(answer[i]+1 ,end=' ')