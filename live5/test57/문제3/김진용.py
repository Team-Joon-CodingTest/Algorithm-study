from collections import deque


def check(string):
    ary = list(string)
    stk = []

    for i in ary:
        # print(stk)
        if i == '[' or i == '(' or i == '{':
            stk.append(i)

        if i == ']':
            if stk and stk[-1] == '[':
                stk.pop()
        elif i == ')':
            if stk and stk[-1] == '(':
                stk.pop()
        elif i == '}':
            if stk and stk[-1] == '{':
                stk.pop()

    if stk:
        return False
    else:
        return True


def solution(s):
    result = 0
    sq = deque(list(s))

    if sq.count('{') + sq.count('(') + sq.count('[') == 0:
        return 0
    else:
        for i in range(len(sq)):
            sq.rotate(-1)

            if check(''.join(sq)):
                result += 1

        return result


print(solution("[](){}"))
print(solution("}]()[{"))
print(solution("[)(]"))
print(solution("}}}"))
