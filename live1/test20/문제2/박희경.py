"""
사탕의 색이 다른 인접한 두칸 교환
모두 같은 색으로 이루어진 가장 긴 연속 부분을 먹는다.
* 교환하고 다시 되돌리는 것이 포인트
"""
import sys
from collections import deque

input = sys.stdin.readline
n = int(input())

grid = []
for _ in range(n):
    row = list(map(str, input().rstrip()))
    grid.append(row)

di = [1, 0]
dy = [0, 1]


def check():
    max_cnt = 1
    for i in range(n):
        cnt_row = cnt_col = 1
        for j in range(n - 1):
            # 가로
            if grid[i][j] == grid[i][j + 1]:  # 같은 색이면
                cnt_row += 1
            else:
                cnt_row = 1  # 다른 색이면 카운트 다시 시작
            max_cnt = max(max_cnt, cnt_row)

        for j in range(n - 1):
            # 세로
            if grid[j][i] == grid[j + 1][i]:
                cnt_col += 1
            else:
                cnt_col = 1
            max_cnt = max(max_cnt, cnt_col)
    return max_cnt


res = 1
# 오, 왼 (인접한 두 칸 교환)
for i in range(n):
    for j in range(n - 1):
        if j + 1 < n and grid[i][j] != grid[i][j + 1]:
            grid[i][j], grid[i][j + 1] = grid[i][j + 1], grid[i][j]  # 교환
            res = max(res, check())
            grid[i][j], grid[i][j + 1] = grid[i][j + 1], grid[i][j]  # 다시 되돌리기
        if i + 1 < n and grid[i][j] != grid[i + 1][j]:
            grid[i][j], grid[i + 1][j] = grid[i + 1][j], grid[i][j]
            res = max(res, check())
            grid[i][j], grid[i + 1][j] = grid[i + 1][j], grid[i][j]

print(res)
