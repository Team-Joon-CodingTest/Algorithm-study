def solution(s):
    cnt = 0
    cnt_0 = 0
    while True:
        cnt_0 += s.count('0')
        s = '1' * s.count('1')
        temp = bin(len(s))[2:]
        # print(temp)
        cnt += 1
        if temp == '1':
            break
        s = temp
    return[cnt, cnt_0]



print(solution("110010101001"))
print(solution("01110"))
print(solution("1111111"))
