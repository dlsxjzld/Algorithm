from itertools import permutations
n,m = map(int,input().split())
lst = [str(i) for i in range(1,n+1)]
result = list(map(' '.join, (permutations(lst,m))))
for i in result:
  print(i)