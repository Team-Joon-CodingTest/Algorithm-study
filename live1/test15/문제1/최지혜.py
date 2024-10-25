import sys
input = sys.stdin.readline

n, k = input().split()
player = set()

for _ in range(int(n)):
    player.add(input().rstrip())

p = len(player) # 중복이 제외된 플레이어 수

if k == 'Y': # 윷놀이
    print(p)
elif k == 'F': # 같은 그림 찾기
    print(p//2)
else: # 원카드
    print(p//3)
