"""
n보다 크고 2n 보다 작거나 같은 소수 개수
시간 초과..
이미 구해져있는건 바로 쓰는 DP 문제인가?
"""
import sys

input = sys.stdin.readline


# 소수 개수 구하는 함수
def find_prime(num):
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:  # 소수가 아님
            return False
    return True


while True:
    n = int(input())
    count = 0

    if n == 0:
        break
    for i in range(n + 1, 2 * n + 1):
        if find_prime(i):
            count += 1

    print(count)
