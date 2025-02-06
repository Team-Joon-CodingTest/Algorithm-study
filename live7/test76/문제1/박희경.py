import sys
from itertools import *

input = sys.stdin.readline

n, k = map(int, input().split())
a = list(map(int, input().split()))

result = 0
for perm in permutations(a, n):
    x = 500
    for i in range(len(perm)):
        x += perm[i] - k
        if x < 500:
            break
    if x >= 500:
        result += 1

print(result)

"""
3 4
3 7 5
"""