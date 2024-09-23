"""
DFS
"""
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
add, sub, mul, div = map(int, input().split())

min_value = 1e9
max_value = -1e9


def calculate(idx, now, add, sub, mul, div):
    global min_value, max_value
    if idx == N:
        min_value = min(now, min_value)
        max_value = max(now, max_value)
    else:
        if add:
            calculate(idx + 1, now + A[idx], add - 1, sub, mul, div)
        if sub:
            calculate(idx + 1, now - A[idx], add, sub - 1, mul, div)
        if mul:
            calculate(idx + 1, now * A[idx], add, sub, mul - 1, div)
        if div:
            calculate(idx + 1, int(now / A[idx]), add, sub, mul, div - 1)


calculate(1, A[0], add, sub, mul, div)

print(max_value)
print(min_value)
