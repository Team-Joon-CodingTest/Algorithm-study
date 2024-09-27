from itertools import combinations
import sys

input = sys.stdin.readline

n = int(input())
ary = []
for i in range(n):
    ary.append(list(map(int, input().split())))

cary = []
for t in range(1, n+1):
    for i in combinations(ary, t):
        a, b = 1, 0
        for j in i:
            a *= j[0]
            b += j[1]
        cary.append(abs(a - b))

print(min(cary))