import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
q = int(input())

miss = [0] * n     # 실수 한 부분
for i in range(n-1):
    if arr[i + 1] < arr[i]:
        miss[i] = 1

# 누적합
prefixSum = [0] * (n+1)
prefixSum[0] = miss[0]
for i in range(1, n+1):
    prefixSum[i] = prefixSum[i-1] + miss[i-1]

for _ in range(q):
    x, y = map(int, input().split())

    print(prefixSum[y-1] - prefixSum[x-1])