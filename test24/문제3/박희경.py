import sys

input = sys.stdin.readline

t = int(input())
cnt = 0


def is_graph(start, mid, dest):
    global cnt
    visited[mid] = 1    # 방문처리
    if start == dest:   # 순열 사이클의 경우
        cnt += 1
        print("엥", start, dest)
        print(visited)
        for i in range(1, n+1):
            if visited[i] != 1:
                start = i
                is_graph(start, start, arr2[start - 1][1])
                break
            # 모두 방문했을 때 처리
    print(start, mid, dest)
    is_graph(start, dest, arr2[dest-1][1])



for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))

    arr2 = list(zip(range(1, n+1), arr))
    visited = [0] * (n+1)
    # [(1, 3), (2, 2), (3, 7), (4, 8), (5, 1), (6, 4), (7, 5), (8, 6)]
    is_graph(arr2[0][0], arr2[0][0], arr2[0][1])

    # print(arr2[0][0], arr2[0][1])

    print(cnt)
