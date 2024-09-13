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

minusOne = 0
zero = 0
one = 0


# 모두 같은 수인지 체크
def same_check(size, x, y):
    for i in range(x, size + x):
        for j in range(y, size + y):
            if grid[x][y] != grid[i][j]:
                return False
        return True


def divide(size, x, y):
    global minusOne, zero, one
    if same_check(size, x, y):
        if grid[x][y] == 1:
            one += 1
        elif grid[x][y] == 0:
            zero += 1
        else:
            minusOne += 1
    else:
        new_size = size // 3
        for i in range(3):
            for j in range(3):
                divide(new_size, x + i * new_size, y + j * new_size)


divide(n, 0, 0)
print(minusOne)
print(zero)
print(one)
