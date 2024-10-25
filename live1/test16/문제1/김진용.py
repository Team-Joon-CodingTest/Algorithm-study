test = int(input())

cnt = 0
stk = []
for t in range(test):
    word = list(input())
    stk = []
    stk.append(word.pop(0))
    while word:
        if stk and stk[-1] == word[0]:  # 스택에 내용물 있고 가장 최근 값과 단어 첫 글자랑 같다면
            stk.pop()
            word.pop(0)
        else:                           # 같지 않다면
            stk.append(word.pop(0))
    if len(stk) == 0:               # 스택 비어있다면
        cnt += 1
    # print(stk)
print(cnt)
