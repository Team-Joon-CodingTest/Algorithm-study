while True:
    stk = []
    s = input()
    if s == '.':
        break

    for i in s:
        if i == '[' or i == '(':
            stk.append(i)
        elif i == ']':
            if stk and stk[-1] == '[':
                stk.pop()
            else:
                stk.append(i)
        elif i == ')':
            if stk and stk[-1] == '(':
                stk.pop()
            else:
                stk.append(i)
    if len(stk) != 0:
        print("no")
    else:
        print("yes")