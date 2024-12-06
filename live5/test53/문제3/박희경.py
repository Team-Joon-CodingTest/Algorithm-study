"""
1. x, y 공통 숫자 찾기
2. 공통 숫자로 만들 수 있는 최대 정수 찾기
3. 공통 숫자가 0 뿐이면 0
4. 공통 숫자가 없으면 -1
"""


def solution(X, Y):
    answer = ''
    X = sorted(list(map(int, X.rstrip())))
    Y = sorted(list(map(int, Y.rstrip())))

    x, y = 0, 0
    common = []

    while True:
        if x > len(X) - 1 or y >= len(Y):
            break
        if X[x] == Y[y]:
            common.append(X[x])
            x += 1
            y += 1
        elif X[x] < Y[y]:
            x += 1
        else:
            y += 1

    if len(common) == 0:
        return '-1'
    common = sorted(common, reverse=True)
    if common[0] == 0:
        return '0'
    answer = ''.join(map(str, common))

    return answer
