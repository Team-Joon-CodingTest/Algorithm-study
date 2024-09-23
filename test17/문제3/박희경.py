import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
m = int(input())

prefixSum = [0] * (n+1)
prefixSum[0] = 0
for i in range(1, n+1):
    prefixSum[i] = prefixSum[i-1] + arr[i-1]


for _ in range(m):
    i, j = map(int, input().split())

    res = prefixSum[j] - prefixSum[i-1]
    print(res)