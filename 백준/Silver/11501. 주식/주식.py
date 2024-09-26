import sys
input = sys.stdin.readline

t = int(input())
answer = []
for _ in range(t):
  n = int(input())
  prices = list(map(int,input().split(' ')))
  maxPrice = 0
  total = 0
  
  for i in range(n-1,-1,-1):
    if maxPrice < prices[i]:
      maxPrice = prices[i]
    else:
      total += maxPrice-prices[i]
  answer.append(str(total))

print('\n'.join(answer))