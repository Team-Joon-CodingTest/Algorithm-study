import sys

input = sys.stdin.readline

n = int(input())
paper = []
cnt_white, cnt_blue = 0, 0
is_same = True


def divide(x, y, n):
    global cnt_white, cnt_blue, is_same
    color = paper[x][y]     # 현재 색종이 색
    # 첫번째 색종이 색이랑 같은지
    for i in range(x, x+n):
        for j in range(y, y+n):
            if color != paper[i][j]:    # 같지 않으면 나누기 /2 씩
                new = n // 2
                divide(x, y, new)
                divide(x, y + new, new)
                divide(x + new, y, new)
                divide(x + new, y + new, new)
                return

    if color == 1:
        cnt_blue += 1
    else:
        cnt_white += 1


for _ in range(n):
    paper.append(list(map(int, input().split())))

divide(0, 0, n)
print(cnt_white)
print(cnt_blue)