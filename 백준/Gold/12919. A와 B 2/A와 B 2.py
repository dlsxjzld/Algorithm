import sys
input = sys.stdin.readline

s = list(input().rstrip())
t = list(input().rstrip())
answer = 0
def dfs(t,s):
  global answer
  if(len(t) == len(s)):
    if(''.join(t) == ''.join(s)):
      answer = 1
      return
  else:
    if(t[-1] == 'A'):
      dfs(t[0:-1],s)
    if(t[0] == 'B'):
      tmp = t[::-1]
      dfs(tmp[0:-1],s)

dfs(t,s)
print(answer)
