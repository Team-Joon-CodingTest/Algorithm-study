import sys

input = sys.stdin.readline


# 2진수 -> 10진수
n10 = int(input(), 2)

# 10진수 -> 8진수   '0o' 제외하기 위해 [2:]
n8 = oct(n10)[2:]

print(n8)