import sys

input = sys.stdin.readline

m = int(input())
n = int(input())

prime_list = []


def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


for i in range(m, n + 1):
    if is_prime(i):
        prime_list.append(i)

if len(prime_list) == 0:
    print(-1)
else:
    print(sum(prime_list))
    print(prime_list[0])