
while(True):
    word = input()

    stack = []
    if word == '.':
        break

    for w in word:
        if w =='(' or w=='[': # 여는 괄호일 경우 stack에 추가
            stack.append(w)
        elif w ==')':
            if len(stack) != 0 and stack[-1] == '(': # stack이 비어있지 않고 마지막 요소가 ( 이면 pop
                stack.pop()
            else: # stack이 비어있거나 짝이 맞지 않으면 stack에 ) 를 추가하고 break
                stack.append(w)
                break
        elif w == ']':
            if len(stack) !=0 and stack[-1] == '[': # stack이 비어있지 않고 마지막 요소가 [ 이면 pop
                stack.pop()
            else: # stack이 비어있거나 짝이 맞지 않으면 stack에 ] 를 추가하고 break
                stack.append(w)
                break

    if len(stack) == 0: # stack이 비어있으면 모든 괄호가 짝이 맞으므로 yes 출력
        print('yes')
    else: # stack이 비어있지 않으면 괄호들이 짝이 맞지 않는 것이므로 no 출력
        print('no')