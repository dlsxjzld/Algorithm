def solution(queue1, queue2):
    answer = -1
    total = sum(queue1)+sum(queue2)
    queue3 = queue1+queue2
    q1pointer = 0
    q2pointer = len(queue2)
    sum1 = sum(queue1)
    cnt = 0
    while cnt <= len(queue3)*2:
        if sum1 == total/2:
            return cnt
        elif sum1 < total/2:
            sum1 += queue3[q2pointer%len(queue3)]
            q2pointer+=1
        else:
            sum1 -= queue3[q1pointer%len(queue3)]
            q1pointer+=1
        cnt+=1
    return answer