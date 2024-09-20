import sys
input = sys.stdin.readline

def dfs():
    if len(s) == m: # s에 들어가있는 리스트 길이가 m이면
        print(' '.join(map(str, s))) # 출력 후 return함으로써 함수 탈출
        return
    for i in range(1, n+1):
        if visited[i]: # 이미 해당 수열을 방문했으면
            continue
        visited[i] = True # 방문하지 않았으면 방문했음 표시
        s.append(i)
        dfs()
        s.pop() # 방금 추가한 숫자를 수열에서 제거
        visited[i] = False # false로 다시 바꿔서 다른 수열을 탐색할 수 있도록 함



n, m = map(int, input().split())
s = [] # 탐색 중인 수열 저장하는 리스트
visited = [False] * (n+1)
dfs()