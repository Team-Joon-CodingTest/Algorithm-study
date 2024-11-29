dic = {'0' : 0, '1' : 0}

numbers = input()

if '1' not in numbers or '0' not in numbers:
    print(0)
else:
    while '00' in numbers or '11' in numbers:
        numbers = numbers.replace('00', '0')
        numbers = numbers.replace('11', '1')

    for i in numbers:
        dic[i] += 1
    # print(dic)
    print(min(dic.values()))
