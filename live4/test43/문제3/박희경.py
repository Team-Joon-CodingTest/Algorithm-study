import sys
import heapq

input = sys.stdin.readline

n = int(input())
m = int(input())
routes = [[sys.maxsize] * (n + 1) for _ in range(n + 1)]
result = [[sys.maxsize] * (n + 1) for _ in range(n + 1)]

for _ in range(m):
    start, dest, cost = map(int, input().split())

    routes[start][dest] = min(routes[start][dest], cost)

for i in range(1, n + 1):
    routes[i][i] = 0


def dijkstra(start):
    q = []
    result[start][start] = 0
    heapq.heappush(q, (0, start))

    while q:
        cur_cost, now = heapq.heappop(q)
        if result[start][now] < cur_cost:
            continue

        for i in range(1, n + 1):
            if routes[now][i] != sys.maxsize:
                new_cost = cur_cost + routes[now][i]
                if new_cost < result[start][i]:
                    result[start][i] = new_cost
                    heapq.heappush(q, (new_cost, i))


for i in range(1, n + 1):
    dijkstra(i)

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if result[i][j] == sys.maxsize:
            print(0, end=" ")
        else:
            print(result[i][j], end=" ")
    print()

