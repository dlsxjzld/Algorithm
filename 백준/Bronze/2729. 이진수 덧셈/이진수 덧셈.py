n = int(input())
for _ in range(n):
    a,b = input().split(" ")
    a = int(a,2)
    b = int(b,2)
    print(bin(a+b).replace("0b",""))