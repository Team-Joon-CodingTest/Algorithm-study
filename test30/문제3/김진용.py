from collections import deque
c = int(input())
v = int(input())

graph = [[] for _ in range(c + 1)]
visited = [False]*(c+1)
for _v in range(v):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(x):
    global cnt
    q = deque([x])
    visited[x] = True
    while q:
        nx = q.popleft()
        for i in graph[nx]:
            if not visited[i]:
                cnt += 1
                visited[i] = True
                q.append(i)

cnt = 0
bfs(1)
print(cnt) # 1번 컴퓨터가 걸린 횟수는 빼줘야함 왜냐하면 1번 컴퓨터로부터 걸린 컴퓨터 수니깐
