N, M = map(int, input().split())
minimum = []
def dfs(x, y, z):
    if x == y:
        minimum.append(z)
        return
    if x - y == 1:
        dfs(x - 1, y, z + 1)
        return
    elif x - y >= 2:
        return
    if x >= 0:
        dfs(x - 1, y, z + 1)
        dfs(x + 1, y, z + 1)
        dfs(2 * x, y, z)


dfs(N, M, 0)