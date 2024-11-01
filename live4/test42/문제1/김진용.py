import sys

import heapq


def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    dis[start] = 0
    while q:
        d, now = heapq.heappop(q)
        if dis[now] < d:
            continue
        for v, w in load[now]:
            cost = d + w
            if cost < dis[v]:
                dis[v] = cost
                heapq.heappush(q, (cost, v))


N, M = map(int, input().split())
load = [[] for _ in range(N + 1)]
dis = [sys.maxsize] * (N + 1)
for _ in range(M):
    a, b, c = map(int, input().split())
    load[a].append((b, c))
    load[b].append((a, c))

dijkstra(1)
print(dis[N])