import sys

input = sys.stdin.readline


def is_perfect(num):
    arr = []
    for i in range(1, num):
        if num % i == 0:
            arr.append(i)
    if sum(arr) == n:
        return arr


def print_result(arr):
    result = [n, '=']
    for i in range(len(arr)-1):
        result.append(arr[i])
        result.append('+')
    result.append(arr[-1])
    print(*result)


while True:
    n = int(input())

    if n == -1:
        break

    perfect = is_perfect(n)
    if perfect:
        print_result(perfect)
    else:
        print(n, "is NOT perfect.")