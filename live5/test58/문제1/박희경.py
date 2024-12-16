import sys

input = sys.stdin.readline

n = int(input())
result = 0
for _ in range(n):
    words = list(map(str, input().rstrip()))

    stack = []
    for word in words:
        if len(stack) > 0:
            if stack[-1] == word:
                stack.pop()
            else:
                stack.append(word)
        else:
            stack.append(word)

    if len(stack) == 0:
        result += 1
print(result)

"""
3
ABAB
AABB
ABBA
"""