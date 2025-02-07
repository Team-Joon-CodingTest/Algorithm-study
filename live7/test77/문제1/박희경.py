import sys

input = sys.stdin.readline

n = int(input())
matrix = []
result = [0] * n
for _ in range(n):
    matrix.append(list(map(int, input().split())))

for i in range(n):
    for j in range(n):
        if i == j:
            continue
        result[i] |= matrix[i][j]

print(*result)
"""
3
0 1 1
1 0 1
1 1 0
"""