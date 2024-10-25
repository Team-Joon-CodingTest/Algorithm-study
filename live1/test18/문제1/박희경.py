"""
슬라이딩 윈도우 + 누적합
"""
import sys

input = sys.stdin.readline

n, k = map(int, input().split())
t = list(map(int, input().split()))

start = 0
end = k
prefixSum = maxSum = sum(t[start:end])

while end < len(t):
    if end == len(t):
        break
    else:
        prefixSum -= t[start]
        start += 1
        end += 1
        prefixSum += t[end - 1]
        maxSum = max(maxSum, prefixSum)

print(maxSum)
