import sys
input = sys.stdin.readline

a,b = map(int,input().split())
A = set(map(int,input().split()))
B = set(map(int,input().split()))

answer = list(A.difference(B))
print(len(answer))
if(len(answer) != 0):
  answer.sort()
  print(*answer)