import sys

input = sys.stdin.readline
s,p = map(int,input().split())
dna = list(input())
A,C,G,T = map(int,input().split())

currentChar = {
  'A':0,
  'C':0,
  'G':0,
  'T':0
}
def check():
  if currentChar['A'] >=A and currentChar['C'] >=C and currentChar['G'] >=G and currentChar['T'] >=T:
    return 1
  return 0

answer =0
for i in range(0,p):
  currentChar[dna[i]] +=1
answer += check()

for i in range(1,s-p+1):
  currentChar[dna[i-1]] -= 1
  currentChar[dna[i+p-1]] += 1
  answer +=check()

print(answer)

