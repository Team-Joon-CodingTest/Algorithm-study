def solution(numbers, hand):
    answer = ""

    # 키패드 위치 (생각 못한 부분..)
    pad = {'1': (0, 0), '2': (0, 1), '3': (0, 2),
           '4': (1, 0), '5': (1, 1), '6': (1, 2),
           '7': (2, 0), '8': (2, 1), '9': (2, 2),
           '*': (3, 0), '0': (3, 1), '#': (3, 2)
           }

    left = pad['*']
    right = pad['#']

    for num in numbers:
        if num == 1 or num == 4 or num == 7:
            left = pad[str(num)]
            answer += "L"

        elif num == 3 or num == 6 or num == 9:
            right = pad[str(num)]
            answer += "R"
        else:
            target = pad[str(num)]
            left_dist = abs(left[0] - target[0]) + abs(left[1] - target[1])
            right_dist = abs(right[0] - target[0]) + abs(right[1] - target[1])
            if left_dist < right_dist:
                left = target
                answer += "L"
            elif left_dist > right_dist:
                right = target
                answer += "R"
            else:
                if hand == "left":
                    left = target
                    answer += "L"
                if hand == "right":
                    right = target
                    answer += "R"

    return answer
