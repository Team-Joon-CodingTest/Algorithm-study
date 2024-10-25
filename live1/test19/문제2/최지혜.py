import sys
input = sys.stdin.readline


n = list(map(int, input().strip()))

n = sorted(n, reverse=True)

if n[-1]!=0: # 30의 배수려면 무조건 자릿수에 0이 하나는 있어야하는데 없다면
    print(-1)
else:
    sum = 0
    for i in n: # 각 자릿수들 다 더해주기
        sum += i
    if sum %3 != 0: # 자릿수들을 다 더한 값이 3의 배수가 아니라면
        print(-1)
    else:
        print("".join(map(str, n)))