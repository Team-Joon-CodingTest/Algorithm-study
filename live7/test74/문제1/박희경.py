import sys

input = sys.stdin.readline

n = int(input())

stars = [[' ' for _ in range(n * 4 - 3)] for _ in range(n * 4 - 3)]


def fill_star(num, x, y):
    if num == 1:
        stars[x][y] = '*'
        return

    length = num * 4 - 3
    for i in range(length):
        stars[y][x + i] = '*'   # 처음 가로
        stars[y + i][x] = '*'   # 처음 세로
        stars[y + length - 1][x + i] = '*'  # 마지막 가로
        stars[y + i][x + length - 1] = '*'  # 마지막 세로

    fill_star(num - 1, x + 2, y + 2)


fill_star(n, 0, 0)
for star in stars:
    print(''.join(star))
