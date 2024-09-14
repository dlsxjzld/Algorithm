import sys
input = sys.stdin.readline

s, n = map(int, input().split())
n = str(n)

w, h = s+2, 2*s+3


def top(new_board):
    for i in range(1, s+1):
        new_board[0][i] = '-'


def lt(new_board):
    for i in range(1, s+1):
        new_board[i][0] = '|'


def rt(new_board):
    for i in range(1, s+1):
        new_board[i][-1] = '|'


def mid(new_board):
    for i in range(1, s+1):
        new_board[s+1][i] = '-'


def lb(new_board):
    for i in range(s+2, 2*s+2):
        new_board[i][0] = '|'


def rb(new_board):
    for i in range(s+2, 2*s+2):
        new_board[i][-1] = '|'


def bottom(new_board):
    for i in range(1, s+1):
        new_board[-1][i] = '-'


def draw(num, new_board):
    if num in '23567890':
        top(new_board)
    if num in '456890':
        lt(new_board)
    if num in '12347890':
        rt(new_board)
    if num in '2345689':
        mid(new_board)
    if num in '2680':
        lb(new_board)
    if num in '134567890':
        rb(new_board)
    if num in '2356890':
        bottom(new_board)
    tmp.append(new_board)


tmp = []
answer = [[] for _ in range(2*s+3)]
for i in n:
    board = [[' ' for _ in range(w)] for _ in range(h)]
    draw(i, board)
for i in range(2*s+3):
    for j in range(len(n)):
        answer[i] += tmp[j][i]
        answer[i].append(' ')

for i in range(2*s+3):
    print(''.join(answer[i]))
