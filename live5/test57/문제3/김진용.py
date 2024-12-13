from collections import deque


def check(string):
    ary = list(string)
    stk = []

    for i in ary:
        if i == '[' and i == '(' and i == '{':
            stk.append(i)
        elif i == ']':
            if stk and stk[-1] == '[':
                stk.pop()
        elif i == ')':
            if stk and stk[-1] == '(':
                stk.pop()
        elif i == '}':
            if stk and stk[-1] == '{':
                stk.pop()
    print(stk)
    if stk:
        return False
    else:
        return True

def solution(s):
    result = 0
    sq = deque(list(s))

    for i in range(len(sq)):
        sq.rotate(-1)

        if check(''.join(sq)):
            result += 1

    return result


print(solution("[](){}"))
print(solution("}]()[{"))
print(solution("[)(]"))
print(solution("}}}"))
