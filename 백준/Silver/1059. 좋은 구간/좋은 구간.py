import sys
input = sys.stdin.readline

l = int(input())
S = list(map(int, input().split()))
S.sort()
n = int(input())

# n보다 큰 첫 번째 값의 인덱스 찾기
max_index = next((i for i, value in enumerate(S) if value > n), len(S))
max_val = S[max_index] if max_index < len(S) else float('inf')
min_val = S[max_index - 1] if max_index > 0 else 0

count = (max_val - n) * (n - min_val) - 1
print(0 if count <= 0 else count)
