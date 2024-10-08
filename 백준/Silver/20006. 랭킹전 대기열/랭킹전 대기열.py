import sys
input = sys.stdin.readline
p, m = map(int, input().split())
rooms = []

for _ in range(p):
    l, n = input().split()
    for room in rooms:
        if len(room) < m and room[0][0] - 10 <= int(l) <= room[0][0] + 10:
            room.append((int(l), n))
            break
    else:
        new_room = [(int(l), n)]
        rooms.append(new_room)

for room in rooms:
    room.sort(key=lambda x : x[1])
    if len(room) == m:
        print('Started!')
        for i in range(m):
            print(room[i][0], room[i][1])
    else:
        print('Waiting!')
        for i in range(len(room)):
            print(room[i][0], room[i][1])