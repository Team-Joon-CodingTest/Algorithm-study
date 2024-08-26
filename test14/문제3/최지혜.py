import sys
n = int(sys.stdin.readline())

card = []
ans = []

for i in range(1, n+1):
    card.append(i) # 1 ~ n까지의 카드 추가

while (len(card) != 0): 
    ans.append(card.pop(0)) # 가장 위에 있는 카드를 없앰과 동시에 ans에 추가
    if(len(card) != 0): 
        card.append(card.pop(0)) # 다음 카드를 없앰과 동시에 맨 밑에 추가해줌


for j in ans:
    print(j, end = " ")