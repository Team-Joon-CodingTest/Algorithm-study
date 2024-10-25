from itertools import permutations

ary = []

n = int(input())

for i in range(1, n+1):
    ary.append(i)

for i in permutations(ary):
    print(*i)