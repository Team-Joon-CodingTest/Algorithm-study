import sys

input = sys.stdin.readline

n = list(map(str, input().rstrip()))
n.sort(reverse=True)

sum = 0

if '0' not in n:  # 10의 배수가 될 수 없으므로
    print(-1)
else:
    for i in n:
        sum += int(i)  # 각 자리수의 합이 3의 배수인지 판별
    if sum % 3 != 0:  # 3의 배수 아니라면
        print(-1)
    else:
        print(''.join(n))
