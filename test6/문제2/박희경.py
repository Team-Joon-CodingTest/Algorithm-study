"""
다음 소수
n보다 크거나 같은 소수 중 가장 작은 소수 찾기
"""
import sys

input = sys.stdin.readline


# 소수 찾는 함수 (제곱근 사용)
def is_prime(num):
    for i in range(2, int(num**1//2)+1):
        if num % i == 0:    # 소수가 아님
            return False
        else:
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

