test = int(input())


stack = []

for t in range(test):
    o = input().split()

    if o[0] == 'push':
        stack.append(o.pop())
    elif o[0] == 'pop':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())
    elif o[0] == 'size':
        print(len(stack))
    elif o[0] == 'empty':
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif o[0] == 'top':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])