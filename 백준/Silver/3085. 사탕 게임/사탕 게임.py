import sys
input=sys.stdin.readline

def check(arr):
    n=len(arr)
    answer=1

    for i in range(n):
        # 열 순회하면서 연속되는 숫자 세기
        cnt=1
        for j in range(1, n):
            if arr[i][j] == arr[i][j-1]:
        	# 이전 것과 같다면 cnt에 1 더하기
                cnt += 1
            else:
            # 이전과 다르다면 다시 1로 초기화
                cnt=1
                
            # 비교해서 현재 cnt가 더 크다면 answer 갱신하기
            if cnt > answer:
                answer = cnt

        # 행 순회하면서 연속되는 숫자 세기
        cnt=1
        for j in range(1, n):
            if arr[j][i] == arr[j-1][i]:
        	# 이전 것과 같다면 cnt에 1 더하기
                cnt += 1
            else:
            # 이전과 다르다면 다시 1로 초기화
                cnt=1
                
            # 비교해서 현재 cnt가 더 크다면 answer 갱신하기
            if cnt > answer:
                answer = cnt

    return answer

n=int(input())
arr=[list(input()) for _ in range(n)]
answer=0

for i in range(n):
    for j in range(n):
        # 열 바꾸기
        if j+1 < n:
        	# 인점한 것과 바꾸기
            arr[i][j], arr[i][j+1] = arr[i][j+1], arr[i][j]
            
            # check는 arrd에서 인점한 것과 바꿨을 때 가장 긴 연속한 부분을 찾아내는 함수이다
            temp=check(arr)

            if temp > answer:
                answer = temp
               
            # 바꿨던 것을 다시 원래대로 돌려놓기
            arr[i][j], arr[i][j+1] = arr[i][j+1], arr[i][j]

        # 행 바꾸기
        if i+1 < n:
        	# 인점한 것과 바꾸기
            arr[i][j], arr[i+1][j] = arr[i+1][j], arr[i][j]
            
            # check는 arrd에서 인점한 것과 바꿨을 때 가장 긴 연속한 부분을 찾아내는 함수이다
            temp=check(arr)

            if temp > answer:
                answer = temp
            
            # 바꿨던 것을 다시 원래대로 돌려놓기
            arr[i][j], arr[i+1][j] = arr[i+1][j], arr[i][j]
            
print(answer)