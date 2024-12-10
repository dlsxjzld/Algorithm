import sys
input = sys.stdin.readline

n = int(input())

def cal(n1,n2):
  first = n1
  second = n2
  third = first-second
  result = [first,second]
  while(third >=0):
    result.append(third)
    first = second
    second = third
    third = first-second
  return result

answer =[]
for i in range(n,0,-1):
  array = cal(n,i)
  if(len(array) > len(answer)):
    answer = array

print(len(answer))
print(' '.join(list(map(str,answer))))