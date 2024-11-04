from collections import deque
import sys

n, m, k, s = list(map(int, sys.stdin.readline().split()))

# 그래프 초기화
graph = {}
for i in range(n + 1):
    graph[i] = []
# 도로 정보 입력 받기
for i in range(m):
    a, b = list(map(int, sys.stdin.readline().split()))
    graph[a].append(b)

# BFS 탐색
dist_list = [0 for _ in range(n + 1)]  # 각 도시까지의 거리 저장
visited = [0 for _ in range(n + 1)]    # 방문 여부 저장
queue = deque([s])                      # 시작 도시를 큐에 추가
visited[s] = 1                          # 시작 도시 방문 처리
while queue:
    now = queue.popleft()
    for j in graph[now]:
        if visited[j] == 0:             # 방문하지 않은 도시일 경우
            queue.append(j)             # 큐에 추가
            visited[j] = 1              # 방문 처리
            dist_list[j] = dist_list[now] + 1  # 현재 도시에서 다음 도시까지의 거리 갱신

check = 0
for i in range(1, n + 1):
    if dist_list[i] == k:               # 거리가 k인 도시가 있다면 출력
        print(i)
        check += 1
if check == 0:                          # 거리가 k인 도시가 없을 경우 -1 출력
    print(-1)
