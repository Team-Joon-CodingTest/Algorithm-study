test = int(input())

cnt = 0
stk = []
for t in range(test):
    word = list(input())
    stk = []
    stk.append(word.pop(0))
    while word:
        if stk and stk[-1] == word[0]:
            stk.pop()
            word.pop(0)
        else:
            stk.append(word.pop(0))
    if len(stk) == 0:
        cnt += 1
    # print(stk)
print(cnt)
