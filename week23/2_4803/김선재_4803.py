'''
[bfs]
연결된 정점이 싸이클을 이루는지에 대한 여부를 확인
'''
import sys
from collections import deque

input = sys.stdin.readline

# 트리 여부를 확인하는 bfs 함수
def bfs(v):
    isTree = True
    q = deque([v])

    while q:
        now = q.popleft()

        # 현재 정점을 이미 다른 요소를 통해 방문 -> '싸이클'
        if visited[now] == 1: 
            isTree = False 

        visited[now] = 1
        for j in graph[now]:
            if visited[j] == 0:
                q.append(j)

    return isTree

case = 0
while True:
    case += 1
    n, m = map(int, input().split())

    if [n, m] == [0, 0]: # 입력의 마지막 줄
        break

    # 그래프 저장  -> [[], [2, 3], [1, 3], [2, 1], [5, 6], [4, 6], [5, 4]]
    graph = [[] for _ in range(n + 1)]  
    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)
    
    treeCnt = 0  

    visited = [0] * (n + 1)
    for i in range(1, n + 1):
        if visited[i] == 1:  # 방문 이력 o
            continue
        if bfs(i) is True: # 방문 이력 x
            treeCnt += 1

    # 출력 형식
    if treeCnt == 0:
        print('Case {}: No trees.'.format(case))
    elif treeCnt == 1:
        print('Case {}: There is one tree.'.format(case))
    else:
        print('Case {}: A forest of {} trees.'.format(case, treeCnt))