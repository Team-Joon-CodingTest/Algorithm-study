n = int(input())
cnt = 0
if n % 2 == 0:
    num = n + 1
    while True:       
        for i in range(2, 7):
            if num % i == 0:
                num = num + 2
                cnt = cnt + 1
        if cnt == 0:
            print(num)

else:
    while True:
        for i in range(2, 7):
            if n % i == 0:
                n = n + 2
                cnt = cnt +1
        
        if cnt == 0:
            print(n)

    