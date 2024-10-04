import sys
n = int(sys.stdin.readline().rstrip())
array = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline().rstrip())

start = 1
end = max(array)


def binary_search(array, start, end, target):
    result = 0
    while start <= end:
        total = 0
        mid = (start+end)//2
        for i in array:
            if mid > i:
                total += i
            else:
                total += mid
        if total <= target:
            result = mid
            start = mid+1
        else:
            end = mid-1

    return result


if sum(array) <= m:
    answer = max(array)
else:
    answer = binary_search(array, start, end, m)

print(answer)
