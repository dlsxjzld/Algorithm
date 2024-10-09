import sys

input = sys.stdin.readline

n,k = map(int,input().split())
result = []

def dfs(total,array=[]):
  if(total > n):return
  if(total ==n):
    result.append(array[:])
    return
  for i in range(1,4):
    array.append(i)
    dfs(total+i,array)
    array.pop()

dfs(0,)
def makeString(array):
  return '+'.join(list(map(str,array)))
print(makeString(result[k-1]) if len(result) >=k else -1)