s = list(input())

dic = {'a': 1, 'b': 0}

c = 'a'
for i in range(1, len(s)):
    if s[i] != s[i-1]:
        if c == 'a':
            c = 'b'
        else:
            c = 'a'
        dic[c] += 1
print(min(dic.values()))
