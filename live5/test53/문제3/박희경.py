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
        if x > len(X) - 1:
            break
        if X[x] == Y[y]:
            common.append(X[x])
            Y.remove(Y[y])
            x += 1
            y = 0
        elif X[x] < Y[y]:
            # 1 1 2 2 3 / 1 2 3 4 5
            x += 1
            y = 0
        else:
            y += 1
            if y >= len(Y):
                x += 1
                y = 0

    if len(common) == 0:
        answer = '-1'
    else:
        if len(common) == common.count(0):
            common = [0]

        common = sorted(common, reverse=True)
        answer = ''.join(map(str, common))

    return answer