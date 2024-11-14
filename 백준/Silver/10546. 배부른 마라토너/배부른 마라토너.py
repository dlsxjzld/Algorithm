import sys
input = sys.stdin.readline

n = int(input())
participant = [input().strip() for _ in range(n)]
didRace = [input().strip() for _ in range(n-1)]

check = {}

for p in participant:
  if not check.get(p):
    check[p] = 0
  check[p] += 1
  
for d in didRace:
  check[d] -= 1

print(list(filter(lambda x: x[1] == 1, check.items()))[0][0])