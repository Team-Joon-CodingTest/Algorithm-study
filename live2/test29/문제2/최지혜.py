import sys
input = sys.stdin.readline


def dfs(x,y):
    if graph[x][y] == '-': # 바닥 장식 모양이 '-' 일때
        graph[x][y] = 1 # 방문 처리
        for _y in [1,-1]:   # 양옆 확인하기
            Y = y + _y
            # 좌우 노드가 범위 내이고 '-' 모양이면 재귀함수 호출
            if (Y > 0 and Y < m) and graph[x][Y] == '-':
                dfs(x,Y)

    if graph[x][y] == '|': # 바닥 장식 모양이 '|' 일때
        graph[x][y] = 1	    # 방문처리
        for _x in [1,-1]:   # 위아래 확인하기
            X = x + _x  
            # 범위를 내이고 '|' 모양이라면 재귀함수 호출
            if (X > 0 and X < n) and graph[X][y] == '|':
                dfs(X,y)


n,m = map(int, input().split())
graph = []
for _ in range(n):
    graph.append(list(input()))

count = 0
for i in range(n):
    for j in range(m):
        if graph[i][j] == '-' or graph[i][j] == '|':
            dfs(i,j) 
            count += 1

print(count)