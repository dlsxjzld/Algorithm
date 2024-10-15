import sys
input = sys.stdin.readline

string = list(input().strip())
Length = len(string)
cntA = string.count('a')
answer = 1e9

for i in range(0,Length):
  cntB = 0
  for j in range(i,i+cntA):
    if(string[j%Length] == 'b'):
      cntB+=1
  answer = min(answer,cntB)

print(answer)