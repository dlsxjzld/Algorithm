def solution(citations):
    answer = 0
    citations.sort(reverse=True)
    print(citations)
    for i in range(len(citations)):
        if citations[i]>= i+1:
            answer = i+1
            # answer = i
            # 6 5 3 1 0 => 3
            # 0 1 3 3 5 6 => 3
            # 0 1 3 4 5 6 => 3
    return answer