import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().rstrip().split()))
unique_elements = set()
ans = 0

left = 0
for right in range(N):
  while arr[right] in unique_elements: # 현재 요소에 중복된 요소가 있는 경우
    unique_elements.remove(arr[left]) # left 요소를 삭제하고
    left += 1 # left 한 칸 오른쪽으로 옮김

  unique_elements.add(arr[right]) # 중복된 요소가 없다면 right 포인터가 가리키는 요소를 추가
  ans += right - left + 1

print(ans)