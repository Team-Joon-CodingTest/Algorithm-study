import sys

input = sys.stdin.readline

red, green = map(int, input().split())
result = []


# 최대 공약수 (시간 초과)
# def gcd(a, b):
#     for i in range(1, min(a, b) + 1):
#         if a % i == 0 and b % i == 0:
#             result.append([i, a // i, b // i])

# 유클리드 호제법
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


x = gcd(red, green)

for i in range(1, int(x ** 0.5) + 1):
    if x % i == 0:
        print(i, red // i, green // i)
        if i != x // i:
            print(x // i, red // (x // i), green // (x // i))
