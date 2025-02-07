import sys

input = sys.stdin.readline

n = int(input())
papers = []
for _ in range(n):
    papers.append(list(map(int, input().split())))

white = 0
blue = 0
is_same = True


def cut_paper(x, y, n):
    global white, blue, is_same
    current_color = papers[x][y]
    for i in range(x, x + n):
        for j in range(y, y + n):
            if papers[i][j] != current_color:
                is_same = False
                cut_paper(x, y, n // 2)
                cut_paper(x, y + n // 2, n // 2)
                cut_paper(x + n // 2, y, n // 2)
                cut_paper(x + n // 2, y + n // 2, n // 2)
                return
    if current_color == 1:
        blue += 1
    else:
        white += 1


cut_paper(0, 0, n)
print(white)
print(blue)

"""
8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1
"""
