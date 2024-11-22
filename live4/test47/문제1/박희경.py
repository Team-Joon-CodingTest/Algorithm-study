import sys

input = sys.stdin.readline

m = int(input())
n = int(input())


def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


primes = []
for j in range(m, n + 1):
    if is_prime(j):
        primes.append(j)


if len(primes) > 0:
    print(sum(primes))
    print(primes[0])
else:
    print(-1)