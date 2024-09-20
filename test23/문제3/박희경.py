import sys
from itertools import *

input = sys.stdin.readline

n = int(input())
arr = [i for i in range(1, n+1)]
results = list(permutations(arr, n))

for res in results:
    print(' '.join(map(str, res)))