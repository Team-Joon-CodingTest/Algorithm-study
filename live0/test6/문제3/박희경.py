"""
배스킨라빈스 31
1 ~ N개의 숫자 부를 수 있음
일반적인 필승법: 30을 말하는 사람이 이긴다. 30, 30-(n+1), 30-2(n+1),..., 2
30%(n+1) == 0; 후공 WIN, != 0; 선공 WIN
"""
import sys

input = sys.stdin.readline

A = int(input())

for n in range(1, A+1):
    if 30 % (n+1) == 0:     # 후공 승 (시온 승)
        print(n)


