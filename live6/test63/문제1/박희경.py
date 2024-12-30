import sys

input = sys.stdin.readline

n, k = map(int, input().split())
c = list(map(int, input().split()))

sliding_window = []
start, end = 0, k - 1
sum_value = sum(c[start:end + 1])
sliding_window.append(sum_value)


while end < n:
    sum_value -= c[start]
    start += 1
    end += 1
    if end < n:
        sum_value += c[end]
        sliding_window.append(sum_value)

print(max(sliding_window))


"""
10 2
3 -2 -4 -9 0 3 7 13 8 -3

10 5
3 -2 -4 -9 0 3 7 13 8 -3
"""