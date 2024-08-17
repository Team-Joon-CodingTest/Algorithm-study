import sys


r, g = map(int, sys.stdin.readline().split())

# 최대 공약수 구하는 함수
def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)

temp = gcd(r, g)

for i in range(1, temp + 1):
    if temp % i == 0: # i가 temp의 약수일때만
        print(i, r // i, g // i) # i: 현재 분할된 조각의 크기, r//i는 빨간 사과 조각 수, g//i는 초록 사과 조각 수