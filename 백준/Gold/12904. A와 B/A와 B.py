import sys
input = sys.stdin.readline

S = list(input().strip())
T = list(input().strip())

while(len(T) != len(S)):
  if T[-1] == 'A':
    T.pop()
  elif T[-1] == 'B':
    T.pop()
    T.reverse()

print(1 if ''.join(S) == ''.join(T) else 0)
