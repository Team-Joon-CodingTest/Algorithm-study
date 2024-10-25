from itertools import *


def is_prime(x):
    if x < 2:
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    return True


def solution(numbers):
    nums = [n for n in numbers]  # numbers를 하나씩 자른 것
    nums_list = []
    for i in range(1, len(nums) + 1):
        nums_list += list(permutations(nums, i))  # 순열 리스트
    new_nums = set([int(('').join(n)) for n in nums_list])  # 정수형으로 변경
    print(new_nums)

    answer = sum(is_prime(n) for n in new_nums)
    return answer

