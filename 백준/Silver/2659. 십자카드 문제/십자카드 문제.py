import sys
input = sys.stdin.readline

# 입력 처리
numbers = input().strip().split()

# 시계수 구하기 함수
def get_time_num(array):
    tmp = set()
    for i in range(4):
        target = int(array[i] + array[(i + 1) % 4] + array[(i + 2) % 4] + array[(i + 3) % 4])
        tmp.add(target)
    return sorted(tmp)[0]

# 대상 숫자 계산
target = get_time_num(numbers)
all_num = set()

# 모든 가능한 시계수 계산
for start in range(1111, 10000):
    if '0' in str(start):  # '0'이 포함된 숫자는 제외
        continue
    all_num.add(get_time_num(list(str(start))))

# 출력: target의 순서
print(sorted(all_num).index(target) + 1)
