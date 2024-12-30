import math


def solution(N, road, K):
    result = 0

    city = [[math.inf]*(N+1) for _ in range(N + 1)]

    for r in road:
        x, y, t = r[0], r[1], r[2]

        if city[x][y] != math.inf:
            city[x][y] = min(city[x][y], t)
        if city[y][x] != math.inf:
            city[y][x] = min(city[y][x], t)
        else:
            city[x][y] = t
            city[y][x] = t
    for k in range(1, N + 1):
        for i in range(1, N + 1):
            for j in range(1, N + 1):
                if city[i][k] != math.inf and city[k][j] != math.inf:
                    city[i][j] = min(city[i][j], city[i][k] + city[k][j])
                if i == j:
                    city[i][j] = 0

    for c in city[1]:
        if c <= K:
            result += 1

    return result



print(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3))
print(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4))
