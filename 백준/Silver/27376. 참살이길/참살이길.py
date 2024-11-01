def cw(time, period, start):
    if time<start:
        return start - time
    now = time - start
    sw = (now//period)%2
    return sw * (period - now % period)

temp = list(map(int,input().split()))
n = temp[0]
k = temp[1]
cross = []
for i in range(k):
    x = list(map(int,input().split()))
    cross.append(x)
cross.sort(key=lambda x:x[0])
mytime = 0
mypos = 0

for x,t,s in cross:
    mytime += x-mypos
    mytime += cw(mytime,t,s)
    mypos = x
mytime = mytime + n-mypos
print(mytime)