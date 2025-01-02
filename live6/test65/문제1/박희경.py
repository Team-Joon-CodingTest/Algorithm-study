import sys

input = sys.stdin.readline

n = int(input())

board = []
for _ in range(n):
    board.append(list(map(str, input().rstrip())))


def counting():
    max_cnt = 1
    for i in range(n):
        cnt_row = cnt_col = 1
        for j in range(n - 1):
            # 가로
            if board[i][j] == board[i][j + 1]:  # 같은 색이면
                cnt_row += 1
            else:
                cnt_row = 1  # 다른 색이면 카운트 다시 시작
            max_cnt = max(max_cnt, cnt_row)

        for j in range(n - 1):
            # 세로
            if board[j][i] == board[j + 1][i]:
                cnt_col += 1
            else:
                cnt_col = 1
            max_cnt = max(max_cnt, cnt_col)
    return max_cnt

res = 1
for i in range(n):
    for j in range(n - 1):
        if n > j + 1 and board[i][j] != board[i][j + 1]:
            # 아래와 교환
            board[i][j], board[i][j + 1] = board[i][j + 1], board[i][j]
            res = max(res, counting())
            # 복구
            board[i][j], board[i][j + 1] = board[i][j + 1], board[i][j]
        if n > i + 1 and board[i][j] != board[i + 1][j]:
            # 왼쪽과 교환
            board[i][j], board[i + 1][j] = board[i + 1][j], board[i][j]
            res = max(res, counting())
            board[i][j], board[i + 1][j] = board[i + 1][j], board[i][j]

print(res)
