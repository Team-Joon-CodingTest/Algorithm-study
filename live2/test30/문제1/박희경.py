"""
최단거리 문제와 유사 -> BFS로 풀자
"""
import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
friends = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b = map(int, input().split())

    friends[a].append(b)
    friends[b].append(a)

# friends = [[], [3, 4], [3], [1, 4, 2], [1, 5, 3], [4]]


# x가 y를 알 수 있는 단계 계산
def bfs(x, y):
    q = deque([(x, 0)])
    visited = [0] * (n + 1)
    visited[x] = 1
    while q:
        x, cnt = q.popleft()
        if x == y:
            return cnt
        for friend in friends[x]:
            if not visited[friend]:
                visited[friend] = 1
                q.append((friend, cnt + 1))


result = []
for i in range(1, n + 1):
    total_cnt = 0
    for j in range(1, n + 1):
        if i != j:
            total_cnt += bfs(i, j)
    result.append(total_cnt)

# 가장 작은 합계를 가진 사람 출력
print(result.index(min(result)) + 1)
