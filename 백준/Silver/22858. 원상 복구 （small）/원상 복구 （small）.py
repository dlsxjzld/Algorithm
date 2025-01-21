N,K=map(int,input().split())

result=list(map(int,input().split()))
pattern=list(map(int,input().split()))

start=result

for i in range(K):
    tmp=list(range(N))
    for j in range(N):
        go=pattern[j]
        tmp[go-1]=start[j]
    start=tmp

print(' '.join(map(str,start)))