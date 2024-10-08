import sys
input = sys.stdin.readline



p,m = map(int,input().split())
players = [list(input().split()) for i in range(p)]
rooms = []

for level,nickname in players:
  if(len(rooms) ==0):
    rooms.append([[(level),nickname]])
    continue
  for room in rooms:
    if(len(room) <m and int(room[0][0])-10 <= int(level) <=int(room[0][0])+10):
      room.append([(level),nickname])
      break
  else:
    rooms.append([[(level),nickname]])

for room in rooms:
  room.sort(key= lambda x:x[1])
answer =[]

for room in rooms:
  if(len(room) == m):
    answer.append('Started!')
  else:
    answer.append('Waiting!')

  answer.append('\n'.join(list(' '.join(val) for val in room)))


print('\n'.join(answer))