import sys

input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
res = [0] * n

for i in range(n):
    for j in range(n):
        if i == j:  # 자기 자신에 대한 연산 건너뛰기
            continue
        res[i] |= arr[i][j]     # 각 res[i]에 대해 비트 or 연산 수행

print(*res)
