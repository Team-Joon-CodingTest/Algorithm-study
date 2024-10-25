from itertools import *

N, K = map(int, input().split())
ary = list(map(int, input().split()))
count = 0
for i in permutations(ary, N):
    power = 500
    for j in i:
        power += (j - K)
        if power < 500:
            break
    if power >= 500:
        count += 1
print(count)
