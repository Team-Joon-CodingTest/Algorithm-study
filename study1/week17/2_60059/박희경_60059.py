"""
답지 봄..
"""


# 시계방향으로 90도 회전
def rotate(key):
    n = len(key)
    rotate_key = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            rotate_key[j][n - i - 1] = key[i][j]
    return rotate_key


# lock이 1로 다 채워졌는지
def check(lock):
    n = len(lock) // 3
    for i in range(n, n * 2):
        for j in range(n, n * 2):
            if lock[i][j] != 1:
                return False
    return True


def solution(key, lock):
    n = len(lock)
    m = len(key)
    new_lock = [[0] * (n * 3) for _ in range(n * 3)]
    for i in range(n):
        for j in range(n):
            new_lock[i + n][j + n] = lock[i][j]
    for rotation in range(4):
        key = rotate(key)
        for x in range(n * 2):
            for y in range(n * 2):
                for i in range(m):
                    for j in range(m):
                        new_lock[i + x][j + y] += key[i][j]
                if check(new_lock) == True:
                    return True
                else:
                    for i in range(m):
                        for j in range(m):
                            new_lock[i + x][j + y] -= key[i][j]
    return False