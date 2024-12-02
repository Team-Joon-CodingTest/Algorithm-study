def solution(ingredient):
    stk = []
    cnt = 0
    for i in ingredient:
        stk.append(i)

        if stk[-4:] == [1, 2, 3, 1]:
            cnt += 1
            for _ in range(4):
                stk.pop()
    return cnt