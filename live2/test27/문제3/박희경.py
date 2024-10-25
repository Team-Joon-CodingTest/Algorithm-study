import sys
from itertools import *

input = sys.stdin.readline

n, k = map(int, input().split())
a = list(map(int, input().split()))
res = 0

for comb in permutations(a, n):
    weight = 500
    for i in range(n):
        weight -= k  # 하루가 지날 때마다 K만큼 감소
        weight += comb[i]
        if weight < 500:
            break
    if weight >= 500:
        res += 1

print(res)
