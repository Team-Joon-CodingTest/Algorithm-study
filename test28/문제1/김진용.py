import sys
input = sys.stdin.readline

ary = []
for i in range(5):
    ary.append(list(map(int, input().split())))

ary2 = []

result_set = set([])


def dfs(x, y, ary2):
    ary2.append(ary[x][y])
    if len(ary2) == 6:
        result_set.add(tuple(ary2))
        return
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < 5 and 0 <= ny < 5:
            dfs(nx, ny, ary2[:])


for i in range(5):
    for j in range(5):
        dfs(i, j, [])
print(len(result_set))