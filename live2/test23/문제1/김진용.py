import sys
input = sys.stdin.readline
n = int(input())  # 과일의 종류
m = int(input())  # 과일의 총 개수

# 문제의 조건을 고려하면, 중복조합은 (m - 1) C (n - 1)
n -= 1
m -= 1

# 팩토리얼 계산 함수
def factorial(x):
    result = 1
    for i in range(1, x + 1):
        result *= i
    return result

# 중복조합 계산
result = factorial(m) // (factorial(n) * factorial(m - n))
print(result)