"""
1. 그래프 생성 -> 인접 리스트
2. bfs로 거리 계산
"""
from collections import deque


def solution(n, edge):
    answer = 0
    dist = [0] * (n + 1)
    edge.sort()  # 노드 1이 기준이기 때문에 정렬
    graph = [[] for _ in range(n + 1)]  # 인접 리스트

    # 양방향 연결
    for start, dest in edge:
        graph[start].append(dest)
        graph[dest].append(start)

    q = deque([1])  # 노드 1부터
    dist[1] = 1  # 노드 1의 거리를 1로 초기화(방문처리) (0: 방문하지 않은 상태)

    while q:
        now = q.popleft()
        # 현재 노드와 연결된 노드 탐색
        for n in graph[now]:
            if dist[n] == 0:  # 방문하지 않은 노드
                dist[n] = dist[now] + 1
                q.append(n)

    # 가장 먼 노드 개수
    max_dist = max(dist)
    answer = dist.count(max_dist)

    return answer