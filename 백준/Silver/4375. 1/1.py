import sys
input = sys.stdin.readline

while True:
    x = 1
    cnt = 1
    try:
        n = int(input())  # 정수 n
    except:
        break

    while True:
        if x % n == 0:
            print(cnt)
            break
        else:
            x = x*10+1
            cnt += 1
