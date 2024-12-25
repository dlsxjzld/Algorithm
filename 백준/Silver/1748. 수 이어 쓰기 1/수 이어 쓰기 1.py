import sys
input = sys.stdin.readline

n = (input().rstrip())
ten = len(n)-1  # 수의 자리

result = 0

# 그 전의 자리수 더하기 위해 ten = len(n)-1
for i in range(ten):
    result += 9*(10 ** (i)) * (i+1)

result += (int(n)-10**(ten) + 1)*(ten+1)

print(result)
