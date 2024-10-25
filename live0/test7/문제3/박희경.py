"""
돌 게임 2
n개 돌이 있고, 1 or 3개 가져갈 수 있고 마지막 돌 가져가는 사람이 지는 게임 -> 31 게임 필승법 활용?
상근(SK) 선공
"""
import sys

input = sys.stdin.readline

n = int(input())

if n % 2 == 0 or n % 4 == 0:
    print("SK")
else:
    print("CY")
