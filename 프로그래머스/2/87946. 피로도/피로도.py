from itertools import permutations
def solution(k, dungeons):
    answer = 0
    per = list(permutations(dungeons))
    for case in per:
        tmp = k
        cnt = 0
        for [need,cost] in case:
            if tmp >= need:
                tmp -=cost     
                cnt +=1
        answer = max(answer,cnt)

    return answer