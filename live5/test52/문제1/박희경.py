import sys

input = sys.stdin.readline

n, m = map(int, input().split())
t = list(map(int, input().split()))

start, end = 0, m - 1
profit = sum(t[0:m])
max_profit = 0

while True:
    if end >= n:
        break
    max_profit = max(profit, max_profit)

    profit -= t[start]
    start += 1
    end += 1
    if end < n:
        profit += t[end]

print(max_profit)

"""
5 3
10 20 30 20 10
"""