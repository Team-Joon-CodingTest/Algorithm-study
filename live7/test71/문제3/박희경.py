def solution(topping):
    answer = 0

    left = set()
    right = {}  # 놓친 부분: 토핑을 딕셔너리로 카운트 하는 것
    # 토핑 개수 카운트
    for t in topping:
        if t in right:
            right[t] += 1
        else:
            right[t] = 1

    # 토핑 나누기
    for t in topping:
        left.add(t)
        right[t] -= 1

        if right[t] == 0:
            del (right[t])

        if len(left) == len(right.keys()):
            answer += 1

    return answer