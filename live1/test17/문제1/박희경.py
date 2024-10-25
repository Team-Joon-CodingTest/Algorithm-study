"""
누적합
"""
import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))


def prefix_sum(num):
    prefixSum = [0] * n
    prefixSum[0] = arr[0]
    for i in range(1, num):
        prefixSum[i] = prefixSum[i - 1] + arr[i]

    return prefixSum


prefixSum = prefix_sum(n)
for _ in range(m):
    i, j = map(int, input().split())

    if i == 1:
        print(prefixSum[j-1])
    else:
        print(prefixSum[j - 1] - prefixSum[i - 2])