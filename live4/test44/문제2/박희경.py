import sys

input = sys.stdin.readline


def is_prime(num):
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


t = int(input())

for _ in range(t):
    n = int(input())

    while True:
        if n == 0 or n == 1:
            print(2)
            break
        if is_prime(n):
            print(n)
            break
        else:
            n += 1
