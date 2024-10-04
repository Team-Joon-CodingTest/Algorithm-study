from collections import deque

n, k = map(int, input().split()) 
q = deque()
q.append(n)  # 수빈이의 초기 위치를 큐에 추가
visited = [-1 for _ in range(100001)] # 방문 여부와 이동 시간을 기록
visited[n] = 0

while q:
    s = q.popleft() # 큐에서 현재 위치를 꺼냄
    if s == k: # 수빈이의 위치가 동생의 위치와 같아지면
        print(visited[s])
        break
    # 한 칸 뒤로 이동
    if 0 <= s-1 < 100001 and visited[s-1] == -1: # 범위를 벗어나지 않고 아직 방문하지 않았다면
        visited[s-1] = visited[s] + 1
        q.append(s-1)
    # 순간이동
    if 0 < s*2 < 100001 and visited[s*2] == -1:
        visited[s*2] = visited[s]
        q.appendleft(s*2)  # 순간이동은 다른 이동보다 우선순위가 높으므로 큐의 앞에 추가

    # 한 칸 앞으로 이동    
    if 0 <= s+1 < 100001 and visited[s+1] == -1:
        visited[s+1] = visited[s] + 1
        q.append(s+1)
