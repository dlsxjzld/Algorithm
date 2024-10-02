import sys
input = sys.stdin.readline


target = input().strip()


num = 0
index =0

while index<len(target):
  num+=1
  strNum = str(num)
  for i in strNum:
    if(i == target[index]):
      index+=1
      if(index == len(target)):
          print(num)
          exit()
