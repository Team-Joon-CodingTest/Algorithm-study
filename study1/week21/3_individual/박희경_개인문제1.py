"""
|A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|
완전탐색 -> n값이 작아서 가능
순열 구하고 차이 비교
"""
import sys
from itertools import permutations

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

# 순열
p_arr = list(permutations(arr, n))

answer, abs_diff = 0, 0
for p in p_arr:
    for i in range(n-1):
        abs_diff += abs(p[i] - p[i+1])
    answer = max(answer, abs_diff)
    abs_diff = 0

print(answer)