import sys
input = sys.stdin.readline

# 알파벳 맵 정의
ALPHABET = {
    "000000": "A",
    "001111": "B",
    "010011": "C",
    "011100": "D",
    "100110": "E",
    "101001": "F",
    "110101": "G",
    "111010": "H",
}

# 입력 처리
char_count = int(input().strip())
chars = input().strip()

answer = ""
for i in range(char_count):
    # 6자리씩 잘라서 처리
    target = chars[i * 6:(i + 1) * 6]
    keys = ALPHABET.keys()
    flag = False

    # 각 키와 비교
    for key in keys:
        cnt = sum(1 for j in range(6) if key[j] != target[j])  # 다른 문자 개수 계산
        if cnt <= 1:
            answer += ALPHABET[key]
            flag = True
            break

    # 유효하지 않은 경우
    if not flag:
        answer = str(i + 1)
        break

# 결과 출력
print(answer)
