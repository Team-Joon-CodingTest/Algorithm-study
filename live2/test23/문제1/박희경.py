"""
1차 시도: list로 묶고 for문 돌림 -> 메모리 초과(메모리에 저장하지 않고 바로 처리)
2차 시도: itertools.product -> 시간 초과
3차 시도: 적어도 1개씩은 훔쳐야하니 m-n개 고르는 방법으로
"""

import sys
from itertools import *

input = sys.stdin.readline

n = int(input())
m = int(input())

count = 0

# 메모리에 저장하지 않고 바로 조합을 처리
for comb in combinations_with_replacement(range(n), m-n):
    count += 1

print(count)