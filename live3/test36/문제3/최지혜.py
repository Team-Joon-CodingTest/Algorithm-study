n,m = list(map(int,input().split()))
s = []
def dfs(start):
    if len(s)==m: # 리스트 s의 길이가 m과 같으면 
        print(' '.join(map(str,s)))
        return
    
    # start부터 n까지 반복
    for i in range(start,n+1):
        if i not in s: # 현재 숫자가 s 리스트에 없으면
            s.append(i)
            dfs(i+1) # i+1부터 다시 DFS 실행
            s.pop()
dfs(1)