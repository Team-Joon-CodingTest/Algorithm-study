def solution(s):
    s = list(s.rstrip())
    stack = []

    for alpa in s:
        if stack:
            if stack[-1] == alpa:
                stack.pop()
            else:
                stack.append(alpa)
        else:
            stack.append(alpa)

    if stack:
        return 0
    else:
        return 1