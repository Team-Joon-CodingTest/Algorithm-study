"""
가장 적은 종류의 비행기를 타고 모든 국가 여행하기
왕복 : 양방향 그래프
bfs로 푸는 문제였음
"""
import sys
from collections import deque

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    graph = [[] for _ in range(n+1)]  # 인접 리스트

    for _ in range(m):
        a, b = map(int, input().split())

        graph[a].append(b)
        graph[b].append(a)

    # 1번 국가부터 갈 수 있는 국가로 연결해서 이동 (queue 사용)
    visited = [0] * (n+1)
    queue = deque([1])
    cnt = 0

    while queue:
        country = queue.popleft()   # 이동한 나라
        visited[country] = 1  # 방문 처리

        for c in graph[country]:    # 해당 나라에서 비행 가능한 국가 탐색
            if visited[c] == 0:
                visited[c] = 1
                cnt += 1
                queue.append(c)

    print(cnt)