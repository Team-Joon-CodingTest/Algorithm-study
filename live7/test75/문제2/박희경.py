"""
신맛: 사용한 재료의 신맛의 곱
쓴맛: 합
"""
import sys
from itertools import *

input = sys.stdin.readline

n = int(input())
ingredient = [list(map(int, input().split())) for _ in range(n)]


def diff(comb):
    sum_s, sum_b = 1, 0
    for c in comb:
        sum_s *= c[0]
        sum_b += c[1]
    return abs(sum_s - sum_b)


min_diff = float('inf')
for i in range(1, n + 1):
    for comb in combinations(ingredient, i):
        cur_diff = diff(list(comb))
        min_diff = min(cur_diff, min_diff)

print(min_diff)
