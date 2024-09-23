from collections import deque
import sys

input = sys.stdin.readline

n = int(input())
v = int(input())

graph = [[] for i in range(n + 1)]  # 인접 리스트
visited = [0] * (n + 1)

# 그래프 생성
for i in range(v):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

q = deque([1])
visited[1] = 1  # 1번 컴퓨터 시작

while q:
    now = q.popleft()
    for n in graph[now]:
        if visited[n] == 0:
            visited[n] = 1
            q.append(n)

print(sum(visited) - 1)
