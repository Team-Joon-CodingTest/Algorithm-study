import sys


input = sys.stdin.readline

n = list(map(int, input().rstrip()))

sum = 0

if 0 not in n:  # 10의 배수가 될 수 없으므로
    print(-1)
else:
    for i in n:
        sum += i
    if sum % 3 != 0:  # 3의 배수
        print(-1)
    else:
        print(''.join(n))

