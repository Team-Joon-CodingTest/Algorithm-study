"""
10진수 -> 2진수로 변환
    - 2로 나눈 나머지(%) 배열에 담고 뒤집기 (reverse)
    - 배열 크기가 n미만이라면, 앞에 0으로 채우기 (크기: n)
"""


# 2진수로 변환
def to_binary(n, num):
    remainder = []
    while num > 0:
        remainder.append(num % 2)
        num //= 2
    while len(remainder) < n:
        remainder.append(0)
    remainder.reverse()
    return remainder


def solution(n, arr1, arr2):
    answer = []
    arr1_remainder = []  # 2진수 담을 2차원 배열 (지도1)
    arr2_remainder = []  # 지도2

    for arr in arr1:
        arr1_remainder.append(to_binary(n, arr))
    for arr in arr2:
        arr2_remainder.append(to_binary(n, arr))

    for i in range(n):
        result = ""
        for j in range(n):
            if arr1_remainder[i][j] == 1 or arr2_remainder[i][j] == 1:
                result += "#"
            else:
                result += " "
        answer.append(result)

    return answer