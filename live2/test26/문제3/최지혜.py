import sys, itertools
from itertools import combinations
input = sys.stdin.readline

n = int(input())
sour = [] # 신맛
bitter = [] # 쓴맛

for _ in range(n):
    a, b = map(int, input().split())
    sour.append(a)
    bitter.append(b)

diff = float('inf')

for i in range(1, n+1): # 재료를 i개 뽑을 때
    idxs = list(combinations(list(range(n)), i)) # 가능한 모든 조합을 리스트에 저장

    for food in idxs: # 경우 하나씩 탐색
        s = 1
        b = 0

        for j in range(i): # 맛 계산
            s *= sour[food[j]]
            b += bitter[food[j]]
            
        # 신맛과 쓴맛의 차이가 현재 최소 차이보다 작으면 갱신
        if abs(s - b) < diff:
            diff = abs(s - b)

print(diff)