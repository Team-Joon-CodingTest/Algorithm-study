import math

m, n = map(int, input().split())

for i in range(m, n+1):
    if i == 1: # 1은 소수가 아니므로 제외
        continue
    for j in range(2, int(math.sqrt(i))+1):
        if i%j==0: # 약수가 존재하면 소수가 아니므로 break
            break
    else:
        print(i)




