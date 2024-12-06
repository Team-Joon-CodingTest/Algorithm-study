def solution(X, Y):
    dic = {"0": [0, 0],
           "1": [0, 0],
           "2": [0, 0],
           "3": [0, 0],
           "4": [0, 0],
           "5": [0, 0],
           "6": [0, 0],
           "7": [0, 0],
           "8": [0, 0],
           "9": [0, 0]
           }
    for x in X:
        dic[x][0] += 1
    for y in Y:
        dic[y][1] += 1

    result = ''

    for i in ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']:
        for j in range(min(dic[i])):
            result += i

    if result == '':
        return '-1'
    elif len(result) == result.count('0'):
        return '0'

    return result

print(solution("100", "2345"))
print(solution("100", "203045"))
print(solution("100", "123450"))
print(solution("12321", "42531"))
print(solution("5525", "1255"))
