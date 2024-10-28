n = int(input())

if n% 5 == 0: # 5로 나누어 떨어지면 최소이기 때문에 먼저 확인
    print(n//5)

else:
    b = 0
    while n> 0:
        n -= 3 
        b += 1 # 봉지 +1
        if n % 5 == 0: 
            b += n // 5
            print(b)
            break
        elif n == 1 or n == 2: # 안 맞아떨어지면
            print(-1)
            break
        elif n == 0:
            print(b)
            break
