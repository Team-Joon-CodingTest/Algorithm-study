import math


def solution(N, road, K):
    ans = 0

    roads = [[math.inf] * (N + 1) for _ in range(N + 1)]

    for r in road:
        x, y, time = r[0], r[1], r[2]

        if roads[x][y] != math.inf:
            roads[x][y] = min(roads[x][y], time)
        if roads[y][x] != math.inf:
            roads[y][x] = min(roads[y][x], time)
        else:
            roads[x][y] = time
            roads[y][x] = time

    for k in range(1, N + 1):
        for i in range(1, N + 1):
            for j in range(1, N + 1):
                if roads[i][k] != math.inf and roads[k][j] != math.inf:
                    roads[i][j] = min(roads[i][j], roads[i][k] + roads[k][j])
                if i == j:
                    roads[i][j] = 0

    for r in roads[1]:
        if r <= K:
            ans += 1
    return ans