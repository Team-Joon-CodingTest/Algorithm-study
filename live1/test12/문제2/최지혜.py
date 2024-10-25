import sys
input = int(sys.stdin.readline())

stack = []
for i in range(input):
    command = sys.stdin.readline().split()

    if command[0] =='push':
        stack.append(command[1]) # push인 경우 stack에 값 push
    elif command[0] == 'pop':
        if len(stack)==0: # stack 내에 값이 없다면
            print(-1)
        else:
            print(stack.pop())
    elif command[0] == 'size': # 현재 stack 길이 출력
        print(len(stack))
    elif command[0] == 'top': # 가장 stack에서 위에 있는 값 출력
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])
    elif command[0] == 'empty': # stack이 비어있으면 1출력
        if len(stack) == 0:
            print(1)
        else:
            print(0)