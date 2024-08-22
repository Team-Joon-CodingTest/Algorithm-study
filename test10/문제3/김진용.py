test = int(input())
for t in range(test):
    m = list(input())

    dic = {}
    result = 'OK'
    for i in range(len(m)):
        if m[i] not in dic:
            dic[m[i]] = 1
        else:
            dic[m[i]] += 1
        if dic[m[i]] == 4:
            if m[i - 1] != m[i]:
                result = 'FAKE'
                break
            elif m[i - 1] == m[i]:
                dic[m[i]] = 0
    if 3 in dic.values():
        result = 'FAKE'
    print(result)