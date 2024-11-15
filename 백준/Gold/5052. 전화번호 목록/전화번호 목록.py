import sys
input = sys.stdin.readline

t = int(input().strip())
answer = []

for _ in range(t):
    n = int(input().strip())
    phone_numbers = sorted(input().strip() for _ in range(n))
    
    flag = True
    for i in range(n - 1):
        if phone_numbers[i + 1].startswith(phone_numbers[i]):
            flag = False
            break

    if flag:
        answer.append("YES")
    else:
        answer.append("NO")

print("\n".join(answer))
