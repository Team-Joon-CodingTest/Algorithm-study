import sys

input = sys.stdin.readline

prime = [True] * 1299710


def is_prime(n):
    if n == 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


t = int(input())
for _ in range(t):
    k = int(input())

    if is_prime(k): # 소수라면
        print(0)
    else:
        i, j = k, k
        cnt = 0
        while True:
            if is_prime(i):
                break
            i -= 1  # 왼쪽으로 이동
            cnt += 1
            # print("왼쪽", i, j)
        while True:
            if is_prime(j):
                break
            j += 1  # 오른쪽으로 이동
            cnt += 1
            # print("오른쪽", i, j)
        print(cnt)

