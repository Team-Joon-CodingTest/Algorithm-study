"""
2개를 뽑아 더해서 만들 수 있는 모든 수 -> 조합
"""
from itertools import combinations


def solution(numbers):
    answer = []

    combi = []
    combi = list(combinations(numbers, 2))

    for c in combi:
        answer.append(c[0] + c[1])

    answer = list(set(answer))
    answer.sort()

    return answer