import sys
n = int(sys.stdin.readline().strip())
s=sys.stdin.readline().strip()


print(min(
    s.rstrip('R').count('R'),
    s.lstrip('R').count('R'),
    s.rstrip('B').count('B'),
    s.lstrip('B').count('B')))

