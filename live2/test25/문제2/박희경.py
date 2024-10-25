import sys

input = sys.stdin.readline

n = int(input())
stars = [[' ' for _ in range(4 * n - 3)] for _ in range(4 * n - 3)]


def fill_star(num, x, y):
    if num == 1:
        stars[x][y] = '*'
        return

    length = 4 * num - 3  # 한 줄 길이
    for i in range(length):
        stars[y][x + i] = '*'
        stars[y + i][x] = '*'
        stars[y + length - 1][x + i] = '*'
        stars[y + i][x + length - 1] = '*'

    fill_star(num - 1, x + 2, y + 2)


fill_star(n, 0, 0)
for star in stars:
    print(''.join(star))
