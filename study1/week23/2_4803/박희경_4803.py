"""
bfs
"""
import sys
from collections import deque

input = sys.stdin.readline

case = 0


def bfs(x):
    isTree = True
    q = deque([x])
    while q:
        node = q.popleft()
        if visited[node] == 1:  # 이미 탐색된 노드라면 싸이클로 연결되었으니 트리 X
            isTree = False
        visited[node] = 1
        for n in graph[node]:   # 연결된 정점 탐색
            if visited[n] == 0:
                q.append(n)
    return isTree


while True:
    case += 1
    n, m = map(int, input().split())

    if [n, m] == [0, 0]:
        break
    graph = [[] for _ in range(n + 1)]
    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)
    treeCnt = 0
    visited = [0] * (n + 1)
    for i in range(1, n + 1):
        if visited[i] == 1:
            continue
        if bfs(i) is True:
            treeCnt += 1

    if treeCnt == 0:
        print('Case {}: No trees.'.format(case))
    elif treeCnt == 1:
        print("Case {}: There is one tree.".format(case))
    else:
        print("Case {}: A forest of {} trees.".format(case, treeCnt))
