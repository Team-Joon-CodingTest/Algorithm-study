import sys
input = sys.stdin.readline

n, k = map(int, input().split())

coin = []

for _ in range(n):
    coin.append(int(input()))
coin.sort(reverse=True) # 최소니까 큰 수부터 내림차순 정렬

ans = 0
for i in coin: 
    if k >= i: # 거슬러 줘야할 돈이 해당 화폐보다 크면
        ans += k // i # 해당 화폐로 최대 몇개까지 줄 수 있는지 구하고 더해주기
        k %= i # 나머지 구하기
        if k<=0:
            break
print(ans)