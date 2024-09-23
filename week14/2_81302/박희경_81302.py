"""
BFS
"""
from collections import deque


def bfs(place, x, y):
    q = deque([(x, y, 0)])

    visited = [[0] * 5 for _ in range(5)]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, 1, -1]

    visited[x][y] = 1

    while q:
        x, y, dist = q.popleft()
        # 응시자가 앉아있으면
        if 0 < dist <= 2 and place[x][y] == 'P':
            return 0
        if dist == 2:  # 맨해튼 거리가 2를 넘어서면 더 이상 탐색하지 않음
            continue

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < 5 and 0 <= ny < 5 and visited[nx][ny] == 0:
                visited[nx][ny] = 1
                if place[nx][ny] != 'X':  # 벽이 아닌 경우에만 탐색
                    q.append((nx, ny, dist + 1))
    return 1


def solution(places):
    answer = []

    for place in places:
        check = 1
        for i in range(5):
            for j in range(5):
                if place[i][j] == "P":
                    # 한 번 이라도 False가 나온다면 0으로 바꿔줌
                    if bfs(place, i, j) == 0:
                        check = 0
                if check == 0:
                    break
            if check == 0:
                break

        answer.append(check)
    return answer