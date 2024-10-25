"""
일반적인 그리디 문제
"""
import sys

input = sys.stdin.readline

n, k = map(int, input().split())
a = []

for _ in range(n):
    a.append(int(input()))

cnt = 0
for i in range(n - 1, -1, -1):
    if k // a[i] != 0:
        cnt += k//a[i]
        k %= a[i]

print(cnt)
