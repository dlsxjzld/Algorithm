import sys
input = sys.stdin.readline
n = int(input().rstrip())
time = [list(map(int,input().split())) for _ in range(n)]

time.sort(key=lambda x:(x[1], x[0]))
answer = 0
end_time = -1

for a,b in time:
  if a>=end_time:
    answer +=1
    end_time = b

print(answer)
