from collections import deque
n, m = map(int, input().split())

ary = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    ary[a].append(b)
    ary[b].append(a)
def bfs(x):
    queue = deque([x])
    visited[x] = 1

    while queue:
        target = queue.popleft()

        for i in ary[target]:
            if not visited[i]:
                visited[i] = visited[target] + 1
                queue.append(i)


res = []
for i in range(1, n + 1):
    visited = [0] * (n+1)
    bfs(i)
    res.append(sum(visited))

print(res.index(min(res)) + 1)