import sys

input = sys.stdin.read().strip().split("\n")

document = list(input[0])
visited = [False] * len(document)
word = input[1]
cnt = 0

for i in range(len(document)):
    if not visited[i] and ''.join(document[i:i + len(word)]) == word:
        for j in range(len(word)):
            visited[i + j] = True
        cnt += 1

print(cnt)
