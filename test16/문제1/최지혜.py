import sys
input = sys.stdin.readline

n = int(input())
count = 0

for _ in range(n):
    s = input().rstrip()
    stack = []

    for i in range(len(s)):
        if stack and s[i] == stack[-1]: # stack에 값이 존재하고 stack 첫 값과 s[i]가 동일하면 pop
            stack.pop()
        else: # stack에 값이 존재하지 않고 동일하지 않다면 추가
            stack.append(s[i])

    if not stack: # 반복문을 다 돌린 결과에서 stack에 값이 존재하지 않는다면
        count += 1

print(count)