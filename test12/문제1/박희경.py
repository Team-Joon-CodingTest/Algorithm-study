"""
슬라이딩 윈도우
시간 초과 -> 누적합 !!!
"""
import sys

input = sys.stdin.readline

n, x = map(int, input().split())
visit_cnt = list(map(int, input().split()))

start, end = 0, x
max_sum = current_sum = sum(visit_cnt[start:end])
max_cnt = 1

while end < n:
    current_sum -= visit_cnt[start]
    start += 1
    current_sum += visit_cnt[end]
    end += 1

    if current_sum > max_sum:
        max_sum = current_sum
        max_cnt = 1
    elif current_sum == max_sum:
        max_cnt += 1


if max_sum == 0:
    print("SAD")
else:
    print(max_sum)
    print(max_cnt)
