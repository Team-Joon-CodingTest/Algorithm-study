"""
슬라이딩 윈도우
양쪽 거리 포함
"""

import sys

input = sys.stdin.readline

n, k = map(int, input().split())
dict = {}

for _ in range(n):
    g, x = map(int, input().split())

    dict[x] = g

max_x = max(dict.keys())
dict_key = sorted(dict.keys())

# 거리에 맞는 얼음 무게
value_list = [0] * (max_x + 1)
for i in range(1, max_x + 1):
    value_list[i] = dict.get(i, 0)

# 슬라이딩 윈도우
start = 0
end = 2 * k  # 양쪽 k 거리 포함
sum_value = max_value = sum(value_list[start:end+1])
while end < len(value_list) - 1:
    sum_value -= value_list[start]
    start += 1
    end += 1
    sum_value += value_list[end]
    max_value = max(sum_value, max_value)

print(max_value)

