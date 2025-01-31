from itertools import *


def solution(word):
    answer = 0

    alpha = ['A', 'E', 'I', 'O', 'U']
    dict = []
    for i in range(1, 6):
        for p in product(alpha, repeat=i):  # 중복순열
            dict.append(''.join(p))
    dict = sorted(dict)
    return answer