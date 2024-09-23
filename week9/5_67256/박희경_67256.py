def solution(numbers, hand):
    answer = ''
    # 키패드 -> 좌표
    pad = {1: [0, 0], 2: [0, 1], 3: [0, 2],
           4: [1, 0], 5: [1, 1], 6: [1, 2],
           7: [2, 0], 8: [2, 1], 9: [2, 2],
           '*': [3, 0], 0: [3, 1], '#': [3, 2]}

    # 시작 위치
    left = pad['*']
    right = pad['#']

    for num in numbers:
        now = pad[num]
        if num in (1, 4, 7):
            answer += 'L'
            left = now
        elif num in (3, 6, 9):
            answer += 'R'
            right = now
        else:
            # 번호와 왼손의 거리 계산
            left_dis = abs(left[0] - now[0]) + abs(left[1] - now[1])
            # 번호와 오른손의 거리 계산
            right_dis = abs(right[0] - now[0]) + abs(right[1] - now[1])

            # 왼손이 더 가까울 때
            if left_dis < right_dis:
                answer += 'L'
                left = now
            # 오른손이 더 가까울 때
            elif left_dis > right_dis:
                answer += 'R'
                right = now
            # 왼손과 오른손 거리가 같을 때
            else:
                if hand == 'right':
                    answer += 'R'
                    right = now
                else:
                    answer += 'L'
                    left = now

    return answer