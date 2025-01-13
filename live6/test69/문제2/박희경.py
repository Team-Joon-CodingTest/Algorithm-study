import sys
from itertools import *

input = sys.stdin.readline

n = int(input())
arr = [i for i in range(1, n + 1)]

for perm in permutations(arr, n):
    print(*perm)
