import sys

input = sys.stdin.readline

m, n = map(int, input().split())

num = 1000000
prime_list = [0] * 2 + [1] * num    # 0, 1은 소수가 아님


for i in range(m, n+1):
    for j in range(2, int(i ** 0.5) + 1):
        if i % j == 0:
            prime_list[i] = 0
            break

for j in range(m, n + 1):
    if prime_list[j] == 1:
        print(j)
