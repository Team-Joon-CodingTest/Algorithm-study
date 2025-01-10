import sys

input = sys.stdin.readline

n, jimin, hansu = map(int, input().split())

round = 1

while True:
    jimin = (jimin + 1) // 2
    hansu = (hansu + 1) // 2

    if jimin == hansu:
        print(round)
        break

    round += 1

