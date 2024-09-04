"""
2차원 누적합
+ dp
"""
import sys

input = sys.stdin.readline

n, m = map(int, input().split())
matirx = [list(map(int, input().split())) for _ in range(n)]
prefixSum = [[0] * (m + 1) for _ in range(n + 1)]

# 누적합
for i in range(n + 1):
    for j in range(m + 1):
        prefixSum[i][j] = matirx[i - 1][j - 1] + prefixSum[i][j - 1] + prefixSum[i - 1][j] - prefixSum[i - 1][j - 1]

k = int(input())
for _ in range(k):
    i, j, x, y = map(int, input().split())

    res = prefixSum[x][y] - prefixSum[x][j - 1] - prefixSum[i - 1][y] + prefixSum[i - 1][j - 1]
    print(res)
