import sys

input = sys.stdin.readline

while True:
    string = input().rstrip()
    if string == '.':
        break

    stack = []
    is_valid = "yes"
    for char in string:
        if char == '[' or char == '(':
            stack.append(char)

        elif char == ']':
            if len(stack) != 0 and stack[-1] == '[':    # 놓친 부분 (조건문 반대로)
                stack.pop()
            else:
                is_valid = "no"
                break

        elif char == ')':
            if len(stack) != 0 and stack[-1] == '(':    # 놓친 부분
                stack.pop()
            else:
                is_valid = "no"
                break
    if len(stack) != 0:     # 놓친 부분
        is_valid = "no"

    print(is_valid)
