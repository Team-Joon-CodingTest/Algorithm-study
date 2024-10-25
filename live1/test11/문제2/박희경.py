"""
슬라이딩 윈도우; 연속된 범위에서 최댓값
원 모양으로 배치 !
"""
import sys

input = sys.stdin.readline

n, k = map(int, input().split())
taste = list(map(int, input().split()))

start, end = 0, k
max_taste = sum_taste = sum(taste[start:end])

while start <= n-1:
    if start == n - 1:
        break

    if end == n:
        end = 0

    sum_taste -= taste[start]
    start += 1

    sum_taste += taste[end]
    end += 1

    max_taste = max(max_taste, sum_taste)

print(max_taste)