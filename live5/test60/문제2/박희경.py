"""
Y: 2명
F: 3명
O: 4명
"""

import sys


input = sys.stdin.readline

n, type = map(str, input().split())
n = int(n)
players = set()
for _ in range(n):
    players.add(input())

if type == 'Y':
    print(len(players))
elif type == 'F':
    print(len(players) // 2)
elif type == 'O':
    print(len(players) // 3)