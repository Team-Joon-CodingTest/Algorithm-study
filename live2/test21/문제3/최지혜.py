import sys
input = sys.stdin.readline

n = int(input())
graph = []
for i in range(n):
    area = list(map(int,input().split()))
    graph.append(area)

start = (0,0)

visited = [[0] * n for _ in range(n)] # 방문 여부 기록

def dfs(x, y):

    visited[x][y]=True # 현재 위치 방문 처리

    # 이동할 수 있는 방향 설정 (오른쪽 또는 아래쪽으로만 이동 가능)
    dx = [graph[x][y],0]
    dy = [0,graph[x][y]]

    for i in range(2):
        nx = x + dx[i]
        ny = y + dy[i]

        # 이동 가능한 범위 내이고, 아직 방문하지 않은 경우라면 계속 탐색
        if 0<=nx<n and 0<=ny<n and visited[nx][ny]==0:
            dfs(nx,ny)

dfs(0, 0)

if visited[n-1][n-1] == True:
    print('HaruHaru')
else:
    print('Hing')