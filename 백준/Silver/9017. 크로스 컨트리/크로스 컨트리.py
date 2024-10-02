import sys
input = sys.stdin.readline
t = int(input().rstrip())


for i in range(t):
    n = int(input().rstrip())
    array = list(map(int, input().split()))
    teams = [0] * (len((set(array)))+1)
    teams_check = [0] * (len(teams))
    score_fifth = [int(1e9)] * len(teams)
    scores = [0] * len(teams)
    scores[0] = int(1e9)
    cnt = 1
    for i in array:
        teams[i] += 1
    for i in range(len(teams)):
        if teams[i] <6:
            scores[i] = int(1e9)
    for i in range(len(array)):
        if teams[array[i]] >= 6:
            if teams_check[array[i]] < 4:
                scores[array[i]] += cnt
                teams_check[array[i]] += 1
            elif teams_check[array[i]] == 4:
                score_fifth[array[i]] = cnt
                teams_check[array[i]] += 1
            cnt += 1
    win_score = min(scores)
    winners = [i for i, value in enumerate(scores) if value == win_score]
    small = int(1e9)
    idx = 0
    if len(winners) == 1:
        print(scores.index(win_score))
    else:
        for i in winners:
            small = min(score_fifth[i],small)
        idx = score_fifth.index(small)
        print(idx)