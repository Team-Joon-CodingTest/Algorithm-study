import sys

input = sys.stdin.readline

t = int(input())


def dfs(x):
    global cnt
    visited[x] = 1  # 방문처리
    nx = arr[x]
    if not visited[nx]:
        dfs(nx)


for _ in range(t):
    n = int(input())
    arr = [0] + list(map(int, input().split()))
    visited = [0] * (n + 1)
    cnt = 0

    for i in range(1, n + 1):
        if not visited[i]:  # 방문하지 않은 노드부터
            dfs(i)
            cnt += 1  # 사이클이 있을 때

    print(cnt)

# 이전 코드 : 시간 초과
# def is_graph(start, mid, dest):
#     global cnt
#     visited[mid] = 1  # 방문처리
#     if start == dest:  # 순열 사이클의 경우
#         cnt += 1
#         for i in range(1, n + 1):
#             if visited[i] != 1:
#                 start = i
#                 is_graph(start, start, arr2[start - 1][1])
#                 # print(visited)
#                 break
#     # 모두 방문했을 때 처리
#     if '0' not in str(visited):
#         return cnt
#     is_graph(start, dest, arr2[dest - 1][1])
#
#
# for _ in range(t):
#     cnt = 0
#     n = int(input())
#     arr = list(map(int, input().split()))
#
#     arr2 = list(zip(range(1, n + 1), arr))
#     visited = [1] + [0] * n
#     # [(1, 3), (2, 2), (3, 7), (4, 8), (5, 1), (6, 4), (7, 5), (8, 6)]
#     is_graph(arr2[0][0], arr2[0][0], arr2[0][1])
#
#     print(cnt)
