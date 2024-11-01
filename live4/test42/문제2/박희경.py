import sys
import heapq

input = sys.stdin.readline

n, m, k, x = map(int, input().split())
graph = [[] for _ in ange(n + 1)]  # 인접 리스트
distance = [sys.maxsize] * (n + 1)  # 시작 노드로부터 각 노드의 가장 짧은 경로

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)


def dijkstra(start):
    q = []
    distance[start] = 0
    heapq.heappush(q, (0, start))  # (거리, 시작노드)를 큐에 삽입

    while q:
        dist, now = heapq.heappop(q)
        # 기존 최단 거리보다 멀다면 무시
        if distance[now] < dist:
            continue

        # 현재 노드와 인접한 노드 탐색
        for i in graph[now]:
            cost = 1 + dist
            # 현재 노드에서 i까지의 거리가 더 가깝다면 갱신 후 큐 삽입
            if cost < distance[i]:
                distance[i] = cost
                heapq.heappush(q, (cost, i))


dijkstra(x)
flag = False
for i in range(1, n + 1):
    if distance[i] == k:
        flag = True
        print(i)

if not flag:
    print(-1)


# for a in range(1, n + 1):
#     for i in range(1, n + 1):
#         for j in range(1, n + 1):
#             roads[i][j] = min(roads[i][j], roads[i][a] + roads[a][j])

# found = False
# for i in range(1, n + 1):
#     if roads[x][i] == k:
#         print(i)
#         found = True
#
# if not found:
#     print(-1)
