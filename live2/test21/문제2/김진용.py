import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)
n = int(input())

ary = []
for _ in range(n):
    ary.append(list(map(int, input().split())))

cnt = []
def gogo(x, y, n):
    color = ary[x][y]

    for i in range(x, x + n):
        for j in range(y, y + n):

            if color != ary[i][j]:
                for a in range(3):
                    for b in range(3):
                        gogo(x + (n//3)*a, y + (n//3)*b, n//3)
                return

    if color == -1:
        cnt.append(-1)
    elif color == 0:
        cnt.append(0)
    else:
        cnt.append(1)

gogo(0, 0, n)
print(cnt.count(-1))
print(cnt.count(0))
print(cnt.count(1))