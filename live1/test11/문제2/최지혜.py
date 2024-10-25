import sys
input = sys.stdin.readline

n, k = map(int, input().split())
num = list(map(int, input().split()))

num.extend(num) # 원형 배열로 동작되게끔 확장

visited = [0] * 200002 # 누적합을 저장하는 배열
for i in range(1, n*2 +1):
    visited[i] = visited[i-1] + num[i-1] 

ans = 0
for i in range(k, n*2 +1):
    ans = max(ans, visited[i] - visited[i-k]) # 인덱스 차이가 K인 누적합들 차이의 최대값

print(ans)
