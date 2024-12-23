# 2진법
def to_binary(num):
    binary = []
    while num > 0:
        binary.append(str(num % 2))
        num //= 2

    binary.reverse()
    return ''.join(binary)


# 0제거
def count_zero(binary):
    zero_cnt = 0
    for i in range(len(binary)):
        if binary[i] == '0':
            zero_cnt += 1
    return zero_cnt


def solution(s):
    cnt = 0
    zero = 0
    while True:
        if s == '1':
            break

        zero += count_zero(s)
        s = ''.join(s.split('0'))  # 0 제거
        s = to_binary(len(s))
        cnt += 1

    return [cnt, zero]
