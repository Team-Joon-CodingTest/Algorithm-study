"""
슬라이딩 윈도우를 통해서 최대 이익을 구한다.
+ 누적합
"""
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

pay = list(map(int, input().split()))

start, end = 0, m
max_profit = sum_profit = sum(pay[0:end])

while end <= n:
    if end == n:
        break
    # max_profit = max(max_profit, sum(pay[start:end]))     시간 초과난 코드
    sum_profit -= pay[start]
    start += 1
    sum_profit += pay[end]
    end += 1
    max_profit = max(max_profit, sum_profit)

print(max_profit)
