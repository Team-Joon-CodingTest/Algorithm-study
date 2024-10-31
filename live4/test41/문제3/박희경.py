import sys

input = sys.stdin.readline

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
result = [[0] * n for _ in range(n)]

for k in range(n):
    for i in range(n):
        for j in range(n):
            if i == j:
                result[i][j] = 1
            if matrix[i][j] == 1 or matrix[j][i] == 1 or (matrix[i][k] == 1 and matrix[k][j] == 1):
                result[i][j] = 1
                result[j][i] = 1

print(*result)