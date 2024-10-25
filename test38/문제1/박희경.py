import sys

intput = sys.stdin.readline

n = int(input())
chess = [0] * n
cnt = 0


def backtracking(k):
    global cnt
    for i in range(n):
        if queen(k, i):
            chess[k] = i
            if k == n - 1:
                cnt += 1
                return
            else:
                backtracking(k + 1)


def queen(a, b):
    for i in range(a):
        if chess[i] == b or abs(chess[i] - b) == abs(i - a):
            return False
    return True


backtracking(0)
print(cnt)