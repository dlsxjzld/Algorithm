import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int,input().split()))
result = [arr[0],arr[n-1]]

minSum = abs(sum(result))

s= 0
e = n-1

while(s<e):
  diff = arr[s] + arr[e]
  if(abs(diff) < minSum):
    minSum = abs(diff)
    result = [arr[s],arr[e]]
  if(diff > 0):
    e -=1
  elif(diff <0):
    s+=1
  else:
    break

print( ' '.join(list(map(str,result))))