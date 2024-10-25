"""
BFS
"""
import sys
from collections import deque

# N: 도시 개수, M : 도로 개수, K: 거리 정보, X: 출발도시 번호
N, M, K, X = map(int, sys.stdin.readline().split())

road = [[] for _ in range(N + 1)]

# 도로 정보
for _ in range(M):
    a, b = map(int, sys.stdin.readline().split())
    road[a].append(b)

# 모든 거리 초기화
dist = [-1] * (N + 1)
dist[X] = 0


def bfs(x):
    q = deque([x])

    while q:
        x = q.popleft()
        for next_city in road[x]:
            # 아직 방문하지 않은 도시라면
            if dist[next_city] == -1:
                dist[next_city] = dist[x] + 1
                q.append(next_city)


bfs(X)
check = False
for i in range(1, N + 1):
    if dist[i] == K:
        print(i)
        check = True

if not check:
    print(-1)

"""
백준 18352 [특정 거리의 도시 찾기] 
"""
