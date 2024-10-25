from collections import deque
N, M, V = map(int, input().split())

ary = [[] for _ in range(N+1)]
visited = [False]*(N+1)
# print(ary)

for _ in range(M):
    a, b = map(int, input().split())
    ary[a].append(b)
    ary[b].append(a)

for i in ary:      # 작은거 부터니까 정렬 해야함 이게 킬포
    i.sort()

def dfs(x):
    print(x, end=' ')
    visited[x] = True
    for i in ary[x]:
        if not visited[i]:
            dfs(i)


def bfs(x):
    q = deque()
    q.append(x)
    visited[x] = True
    while q:
        nx = q.popleft()
        print(nx, end=' ')
        for i in ary[nx]:
            if not visited[i]:
                q.append(i)
                visited[i] = True
        # print(q)



dfs(V)

visited = [False]*(N+1)
print()
bfs(V)