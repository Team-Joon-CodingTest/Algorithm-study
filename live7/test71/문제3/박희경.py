def solution(topping):
    answer = 0

    left = {}
    right = {}
    for t in topping:
        if t in right:
            right[t] += 1
        else:
            right[t] = 1
    print(right)

    for t in topping:
        left[t] = 1
        right[t] -= 1

        if len(left.values()) == sum(right.values()):
            print(t, "일때,", left, right)
            answer += 1

    return answer