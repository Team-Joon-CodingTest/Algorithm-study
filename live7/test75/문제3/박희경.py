from itertools import *

def solution(word):
    alpha = ['A', 'E', 'I', 'O', 'U']
    dict = []
    for i in range(1, 6):
        for p in product(alpha, repeat=i):  # 중복순열
            dict.append(''.join(p))
    dict = sorted(dict)
    return dict.index(word) + 1