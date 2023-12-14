def recursion(s, l, r, cnt):
    if l >= r:
        return (1, cnt)
    elif s[l] != s[r]:
        return (0, cnt)
    else:
        return recursion(s, l+1, r-1, cnt+1)


def isPalindrome(s, cnt):

    return recursion(s, 0, len(s)-1, cnt+1)


tc = int(input())
for i in range(tc):
    S = input()
    rec_cnt = 0
    x, y = isPalindrome(S, rec_cnt)
    print(x, y)
