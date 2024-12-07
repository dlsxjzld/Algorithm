import sys
input = sys.stdin.readline

# 입력 처리
x, y, w, s = map(int, input().strip().split())

# 초기 값 설정
answer = float('inf')
total_distance = (x + y) * w

# x와 y의 홀짝 여부
is_even_x = x % 2
is_even_y = y % 2

# 짝짝 또는 홀홀인 경우
if (is_even_x and is_even_y) or (not is_even_x and not is_even_y):
    answer = min(
        answer,
        total_distance,
        max(x, y) * s,
        min(x, y) * s + (max(x, y) - min(x, y)) * w
    )
# 짝홀 또는 홀짝인 경우
else:
    answer = min(
        answer,
        total_distance,
        min(x, y) * s + (max(x, y) - min(x, y)) * w,
        (max(x, y) - 1) * s + w
    )

# 결과 출력
print(answer)
