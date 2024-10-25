import sys
input = sys.stdin.readline
n, m = map(int, input().split())
progress = list(map(int, input().split()))+list(map(int, input().split()))
ans = 0
 
 
def recursion(d, prev, total):
    global ans
    if d == n+1: # 모든 단계를 완료했을 때
        if total >= m: # 누적 작업량이 목표 이상이면 
            ans += 1
        return
    for work in range(2): # 두가지 작업을 선택
        for place in range(3): # 세가지 작업을 선택
            if place == prev:
                # 같은 장소를 선택하면 작업량의 절반만 누적
                recursion(d+1, place, total+progress[work*3+place]//2)
            else:
                # 다른 장소를 선택하면 작업량을 그대로 누적
                recursion(d+1, place, total+progress[work*3+place])
 
 
recursion(1, -1, 0)
print(ans)