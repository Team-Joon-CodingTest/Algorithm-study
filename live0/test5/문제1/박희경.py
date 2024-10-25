"""
food[i]//2 한 만큼 양 쪽에 삽입 가운데에 0
"""


def solution(food):
    answer = ''
    res = []
    result = []

    for i in range(1, len(food)):
        for j in range(food[i] // 2):
            res.append(i)
    result.extend(res)
    res.reverse()

    result.append(0)
    result.extend(res)

    answer = ''.join(str(s) for s in result)

    return answer