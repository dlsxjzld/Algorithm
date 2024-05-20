

def check(lights, mid):
    if lights[1] - lights[0] > mid:
        return 0
    if lights[-1] - lights[-2] > mid:
        return 0
    for i in range(1, len(lights)-2):
        if (lights[i+1]-lights[i])/2 > mid:
            return 0
    return 1


n = int(input())
m = int(input())
lights = [0]+list(map(int, input().split()))+[n]

s, e = 0, n
res = 0
while s <= e:
    mid = (s+e)//2
    if check(lights, mid):
        e = mid-1
        res = mid
    else:
        s = mid+1

print(res)
