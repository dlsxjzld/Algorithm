import sys,itertools

input = sys.stdin.readline

board = [list(input().split()) for _ in range(0,5)]
call = list(itertools.chain(*[list(input().split()) for _ in range(0,5)]))

check = [[False for _ in range(5)] for _ in range(5)]

def bingo():
  lines = 0
  for row in range(0,5):
    if(check[row].count(True) == 5): lines +=1

  for col in range(0,5):
    cnt= 0
    for row in range(0,5):
      if(check[row][col] == True):
        cnt+=1
        if(cnt ==5): lines+=1
      
  # 행
  
  # 열

  cnt =0
  # 좌대각
  for i in range(0,5):
    if(check[i][i]) == True:
      cnt+=1
      if(cnt ==5): lines+=1

  cnt =0
  for i in range(0,5):
    if(check[i][4-i]) == True:
      cnt+=1
      if(cnt ==5): lines+=1
      
  return lines>=3

line =0
for [idx,cur] in enumerate(call):

  for i in range(0,5):
    for j in range(0,5):
      if(board[i][j] == cur):
        check[i][j] = True
        if(bingo()):
            print(idx+1)
            exit()
        break
        
