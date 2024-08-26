"""
틀렸음..
"""
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

        if char == ']':
            if len(stack) == 0 or stack.pop() != '[':
                is_valid = "no"
                break
        if char == ')':
            if len(stack) == 0 or stack.pop() != '(':
                is_valid = "no"
                break

    if string != '.':
        print(is_valid)
