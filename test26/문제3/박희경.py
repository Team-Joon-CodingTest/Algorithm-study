"""
신맛끼리 곱
쓴맛끼리 합
"""
import sys
from itertools import *

input = sys.stdin.readline

n = int(input())
taste = []
min_diff = sys.maxsize

for _ in range(n):
    taste.append(list(map(int, input().split())))

# 부분 집합
combinations(taste, n)

for x in range(1, n+1):
    for comb in combinations(taste, x):
        s, b = 1, 0
        for i in range(x):
            s *= comb[i][0]  # 신맛
            b += comb[i][1]
        min_diff = min(min_diff, abs(s-b))

print(min_diff)

