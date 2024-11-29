test = int(input())
for _ in range(test):
    M = list(input())
    result = "OK"
    alpa = dict()
    for i in range(len(M)):
        if M[i] not in alpa:
            alpa[M[i]] = 1
        else:
            alpa[M[i]] += 1

        if alpa[M[i]] == 4:
            if M[i-1] != M[i]:
                result = "FAKE"
                break
            else:
                alpa[M[i]] = 0
    if 3 in alpa.values():
        result = "FAKE"
    print(result)


