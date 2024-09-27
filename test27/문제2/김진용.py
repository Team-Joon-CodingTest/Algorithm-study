from itertools import *
import sys
input = sys.stdin.readline
N, S = map(int, input().split())

ary = list(map(int, input().split()))

count = 0
for i in range(1, N+1):
    for j in combinations(ary, i):
        if sum(j) == S:
            count += 1
print(count)