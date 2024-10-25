import sys
from itertools import *

input = sys.stdin.readline

while True:
    arr = list(map(int, input().split()))
    k = arr[0]
    if k == 0:
        break

    # 조합
    for comb in combinations(arr[1:], 6):
        print(*comb)
    print()