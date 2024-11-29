import sys
from collections import deque

input = sys.stdin.readline

t = int(input())


for _ in range(t):
    dic = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0,
           "I": 0, "J": 0, "K": 0, "L": 0, "M": 0, "N": 0, "O": 0, "P": 0,
           "Q": 0, "R": 0, "S": 0, "T": 0, "U": 0, "V": 0, "W": 0, "X": 0, "Y": 0, "Z": 0}

    flag = True
    q = deque(input().rstrip())

    while q:
        char = q.popleft()
        flag = True
        dic[char] += 1
        if dic[char] == 3:
            # 다음으로 꺼내는 값
            if q and char == q.popleft():
                dic[char] = 0
            else:
                flag = False
                break

    if flag:
        print("OK")
    else:
        print("FAKE")


