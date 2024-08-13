n, m = map(int, input().split())


def is_prime(a):
    if a < 2:
        return False
    for i in range(2, int(a ** 0.5) + 1):
        if a % i  == 0:  # 나누어진다면 바로 False 반환
            return False
    return True  # 나누어지는 수가 하나도 없다면 True 반환


for i in range(n, m + 1):
    if is_prime(i):
        print(i)
