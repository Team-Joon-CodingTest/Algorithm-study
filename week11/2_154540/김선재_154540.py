'''
[dfs]
1. maps 순회하며 dfs 실행
2. dfs 종료후 answer 에 추가
3. answer 오름차순 정렬 
'''
import sys

# 재귀한도설정
sys.setrecursionlimit(1000000)

def solution(maps):
    answer = []

    row = len(maps)
    col = len(maps[0])

    # 이동할 네 가지 방향
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]

    # 방문 배열
    visited = [[False for _ in range(col)] for _ in range(row)]

    def dfs(r,c):
        # 1. 범위 밖
        # 2. 바다
        # 3. 방문한 곳
        if r < 0 or r >= row or c < 0 or c >= col or maps[r][c] == 'X' or visited[r][c]:
            return 0
        
        visited[r][c] = True
        sum = int(maps[r][c]) # 현 위치 식량

        for i in range(4):
            nr, nc = r + dr[i], c + dc[i]
            sum += dfs(nr, nc)
        return sum

    # maps 순회
    for i in range(row):
        for j in range(col):
            if maps[i][j] != 'X' and not visited[i][j]:
                days = dfs(i, j)
                if days > 0:  # 무인도가 존재
                    answer.append(days)

    if not answer:
        return [-1]
    else:
        answer.sort()
        return answer