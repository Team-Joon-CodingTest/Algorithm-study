import sys

input = sys.stdin.readline

n = int(input())

board = []
for _ in range(n):
    board.append(list(map(str, input().rstrip())))

sum = 0
current = board[0][0]


def max_candy(i, j, cnt):
    global n
    current_color = board[i][j]
    dx = [0, 1]
    dy = [1, 0]

    if 0 <= i < n and 0 <= j < n:


max_candy(0, 0, 0)
