import sys
input = sys.stdin.readline
n = int(input())
birth = {}

for i in range(n):
  info = input()
  name,d,m,y = info.split()
  d = d.zfill(2)
  m = m.zfill(2)
  birth[name] = int(y+m+d)
old = max(birth.items(),key=lambda x:x[1])
young = min(birth.items(),key=lambda x:x[1])
print(old[0])
print(young[0])