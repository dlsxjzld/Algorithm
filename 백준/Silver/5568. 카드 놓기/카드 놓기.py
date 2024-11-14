import sys
input = sys.stdin.readline

n = int(input())
k = int(input())
cards = [int(input()) for _ in range(n)]
answer = set()
visited = [False] * n

def dfs(depth, num): 
  if(depth == k):
    answer.add(''.join((num)))
    return
  
  for i in range(n):
    if (not visited[i]):
      visited[i] = True
      num.append(str(cards[i]))
      dfs(depth + 1, num)
      visited[i] = False
      num.pop()
    

dfs(0, [])
print(len(answer))
