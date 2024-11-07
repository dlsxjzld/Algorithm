import sys
input = sys.stdin.readline

N = int(input())
A = sorted(map(int,input().split()))

def search(rest,target):
  start = 0
  end = len(rest)-1
  while(start<end):
    mid = rest[start] + rest[end]
    if(mid == target):
      return True
    elif(mid<target):
      start+=1
    elif(mid>target):
      end-=1
  return False

num = 0
for i in range(0,N):
  rest = A[:i] + A[i+1:]
  target = A[i]

  if(search(rest,target)):
    num+=1
print(num)