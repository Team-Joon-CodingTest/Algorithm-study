"""
슬라이딩 윈도우
양쪽 거리 포함
[0, 5, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 10]
"""

import sys

input = sys.stdin.readline

n, k = map(int, input().split())
dict = {}

for _ in range(n):
    g, x = map(int, input().split())

    dict[x] = g

m = max(dict.keys())  # 좌표 최대

# 거리에 맞는 얼음 무게
value_list = [0] * (m + 1)
for i in range(len(value_list)):    # 이것이 문제였음.......오답의 이유....
    if i in dict.keys():
        value_list[i] = dict[i]
# [0, 5, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 10]

# 슬라이딩 윈도우
start = 0
end = 2 * k + 1  # 양쪽 k 거리 포함

sum_value = max_value = sum(value_list[start:end])

while end < len(value_list) - 1:
    sum_value -= value_list[start]
    sum_value += value_list[end]
    start += 1
    end += 1

    max_value = max(max_value, sum_value)

print(max_value)
