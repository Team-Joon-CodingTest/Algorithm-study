import sys

input = sys.stdin.readline

r, c, q = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(r)]
prefix_sum = [[0] * (c + 1) for _ in range(r + 1)]
prefix_sum[1][1] = grid[0][0]


for i in range(1, r + 1):
    for j in range(1, c + 1):
        prefix_sum[i][j] = grid[i - 1][j - 1] + prefix_sum[i - 1][j] + prefix_sum[i][j - 1] - prefix_sum[i - 1][j - 1]

for _ in range(q):
    r1, c1, r2, c2 = map(int, input().split())
    cnt = (r2 - r1 + 1) * (c2 - c1 + 1)
    ans = prefix_sum[r2][c2] - prefix_sum[r1 - 1][c2] - prefix_sum[r2][c1 - 1] + prefix_sum[r1 - 1][c1 - 1]
    print(ans // cnt)

"""
5 6 1
4 1 3 4 9 5
1 2 8 7 5 5
8 1 2 5 3 2
1 5 3 4 2 5
5 2 1 2 3 5
2 2 4 5
"""