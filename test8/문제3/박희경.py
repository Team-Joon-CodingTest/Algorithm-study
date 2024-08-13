"""
조합
"""
import sys
from math import comb

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())

    result = comb(m, n)
    print(result)
