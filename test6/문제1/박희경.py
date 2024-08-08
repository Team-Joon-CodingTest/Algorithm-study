"""
약수들의 합
"""
import sys

input = sys.stdin.readline


# 약수 구하는 함수
def is_perfect(num):
    divisor = []
    for i in range(1, num):
        if num % i == 0:  # 약수라면
            divisor.append(i)
    if num == sum(divisor):
        return divisor
    return []


# 약수와 더하기를 함께 출력하는 함수
def print_divisor(arr):
    result = ''
    for i in range(len(arr) - 1):
        result += str(arr[i])
        result += ' + '
    result += str(arr[-1])
    return result


while True:
    n = int(input())
    if n == -1:
        break

    # 약수 구하는 함수
    n_divisor = is_perfect(n)

    if len(n_divisor) != 0:
        # 더하기와 함께 출력하는 함수
        print(f"{n} = {print_divisor(n_divisor)}")
    else:
        print(f"{n} is NOT perfect.")

