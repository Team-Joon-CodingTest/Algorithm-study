s = list(input())

dic = {'a': 1, 'b': 0}

c = 'a' # 스위치
for i in range(1, len(s)):
    if s[i] != s[i-1]: # 이전과 다를 경우 바꿔주기
        if c == 'a':
            c = 'b'
        else:
            c = 'a'
        dic[c] += 1

print(min(dic.values()))
