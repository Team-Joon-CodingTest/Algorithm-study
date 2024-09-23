play, g = map(str, input().split())

w = 0
if g == 'Y':
    w = 2
elif g == 'F':
    w = 3
else:
    w = 4

ary = []    # 게임 같이 할 사람들
dic = {}   # 이미 게임을 같이 한 사람들
cnt = 0
for p in range(int(play)):
    player = input()
    if player not in dic:
        dic[player] = 1
        ary.append(player)
    if len(ary) + 1 == w:
        ary = []
        cnt += 1
print(cnt)