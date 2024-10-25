from itertools import *
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
ary = []
for i in range(1, n+1):
    ary.append(i)
for i in permutations(ary, m):
    print(*i)