"""
0  0  0   1 1  1   -1 -1 -1
0  0  0   1 1  1   -1 -1 -1
0  0  0   1 1  1   -1 -1 -1
1  1  1   0 0  0    0  0  0
1  1  1   0 0  0    0  0  0
1  1  1   0 0  0    0  0  0
0  1 -1   0 1 -1    0  1 -1
0 -1  1   0 1 -1    0  1 -1
0  1 -1   1 0 -1    0  1 -1
이렇게 잘리고 1 마지막 줄 3개 또 쪼개고
-1: 10장 0: 12장  1: 11장
"""
import sys

input = sys.stdin.readline

n = int(input())

grid = [list(map(int, input().split())) for _ in range(n)]
same = True


# 모두 같은 수
def same_check(size, current_cnt):
    for i in range(size - 1):
        for j in range(size - 1):
            if grid[i][j] != grid[i][j + 1]:
                size //= 3
                same_check(size, current_cnt)
            else:
                current_cnt[grid[i][j]] += 1
            if grid[i][j] != grid[i + 1][j]:
                size //= 3
                same_check(size, current_cnt)
            else:
                current_cnt[grid[i][j]] += 1    # 개수 세는 거 다시..

    return current_cnt


same_check(n, [0, 0, 0])
