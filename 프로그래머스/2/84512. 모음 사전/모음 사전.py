from itertools import product
def solution(word):
    answer = 0
    letter = ['A','E','I','O','U']
    
    words = []
    for i in range(1,6):
        for w in product(letter,repeat = i):
            words.append(''.join(w))
    words.sort()
    
    answer = words.index(word)+1
    return answer