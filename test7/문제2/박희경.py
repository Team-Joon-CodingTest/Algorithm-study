"""
n보다 크고 2n 보다 작거나 같은 소수 개수
시간 초과..
에르토스테네스의 체 : 소수를 대량으로 빠르게 찾는 알고리즘
"""
import sys

input = sys.stdin.readline
num = 123456 * 2 + 1  # 길이는 n의 최대 범위로 설정
num_list = [1] * num  # 소수가 아니라면 0, 맞으면 1

for i in range(1, num):
    for j in range(2, int(i ** 0.5) + 1):
        if i % j == 0:
            num_list[i] = 0
            break

while True:
    n = int(input())
    count = 0

    if n == 0:
        break
    for i in range(n + 1, 2 * n + 1):
        count += num_list[i]
    print(count)
