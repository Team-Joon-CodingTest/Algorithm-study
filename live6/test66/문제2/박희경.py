import sys

input = sys.stdin.readline

n = int(input())
map = [list(map(int, input().split())) for _ in range(n)]


def jump(x, y):
    dx = [0, map[x][y]]
    dy = [map[x][y], 0]
    for i in range(2):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < n and ny < n:
            if map[nx][ny] == -1:
                return True
            jump(nx, ny)
    return False


if jump(0, 0):
    print("HaruHaru")
else:
    print("Hing")
