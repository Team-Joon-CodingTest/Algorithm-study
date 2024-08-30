"""
괄호 문제처럼 풀기
스택 사용
"""
import sys

input = sys.stdin.readline

n = int(input())
stack = []
cnt = 0


for _ in range(n):
    words = list(input().rstrip())
    stack = []

    for word in words:
        if stack:
            if stack[-1] == word:
                stack.pop()
            else:
                stack.append(word)
        else:
            stack.append(word)
    if not stack:
        cnt += 1

print(cnt)
