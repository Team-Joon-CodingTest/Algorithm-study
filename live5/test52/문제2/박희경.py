import sys

input = sys.stdin.readline

n, k = map(int, input().split())
a = list(map(int, input().split()))

start, end = 0, k - 1
taste = sum(a[0:k])
max_taste = 0

while True:
    if start >= n:
        break
    max_taste = max(max_taste, taste)

    taste -= a[start]
    start += 1
    end += 1
    if end < n:
        taste += a[end]
    if end == n:
        end = 0
        taste += a[end]


print(max_taste)

"""
4 2
5 2 3 4
"""