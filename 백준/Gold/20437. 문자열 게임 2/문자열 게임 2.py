import sys
from collections import defaultdict
input = sys.stdin.readline

# 입력 처리
T = int(input().strip())
answer = []

for tc in range(T):
    w = list(input().strip())
    k = int(input().strip())
    
    # 정확히 k개 포함하는 문자들 종류
    kind_of_char = defaultdict(list)
    
    for index, value in enumerate(w):
        kind_of_char[value].append(index)
    
    # 필터링: k개 이상 포함하는 문자들
    filtered_keys = {key: value for key, value in kind_of_char.items() if len(value) >= k}
    
    MAX = float('-inf')
    MIN = float('inf')
    
    for key, value in filtered_keys.items():
        for idx in range(len(value) - k + 1):
            MAX = max(MAX, value[idx + k - 1] - value[idx] + 1)
            MIN = min(MIN, value[idx + k - 1] - value[idx] + 1)
    
    if MAX == float('-inf') or MIN == float('inf'):
        answer.append("-1")
    else:
        answer.append(f"{MIN} {MAX}")

# 결과 출력
print("\n".join(answer))
