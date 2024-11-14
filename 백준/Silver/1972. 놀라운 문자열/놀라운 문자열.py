import sys
input = sys.stdin.read().strip().splitlines()

def check(depth, word):
    start_set = set()
    for i in range(len(word) - depth - 1):
        start = word[i] + word[i + depth + 1]
        if start in start_set:
            return False
        start_set.add(start)
    return True

index = 0
answer = []
while True:
    word = input[index]
    index += 1
    if word == "*":
        break

    N = len(word)
    is_surprising = True
    for i in range(N - 1):
        if not check(i, word):
            is_surprising = False
            break

    if is_surprising:
        answer.append(f"{word} is surprising.")
    else:
        answer.append(f"{word} is NOT surprising.")

print("\n".join(answer))
