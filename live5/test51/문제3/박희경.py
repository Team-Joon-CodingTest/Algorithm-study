def solution(ingredient):
    answer = 0
    burger = []

    for i in ingredient:
        burger.append(i)
        if len(burger) >= 4:
            if burger[-4:] == [1, 2, 3, 1]:
                answer += 1
                for _ in range(4):
                    burger.pop()
    return answer