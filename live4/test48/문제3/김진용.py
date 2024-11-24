key_pad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
}


def distance(point1, point2):
    x1, y1 = point1
    x2, y2 = point2
    return abs(x1 - x2) + abs(y1 - y2)

def solution(numbers, hand):
    result = ''
    left_pinger = key_pad['*']
    right_pinger = key_pad['#']

    for number in numbers:
        if number in [1, 4, 7]:
            left_pinger = key_pad[number]
            result += 'L'
        elif number in [3, 6, 9]:
            right_pinger = key_pad[number]
            result += 'R'
        else:
            if distance(right_pinger, key_pad[number]) < distance(left_pinger, key_pad[number]):
                result = key_pad[number]
                result += 'R'
            elif distance(right_pinger, key_pad[number]) > distance(left_pinger, key_pad[number]):
                result = key_pad[number]
                result += 'L'
            else:
                if hand == "right":
                    right_pinger = key_pad[number]
                    result += 'R'
                else:
                    left_pinger = key_pad[number]
                    result += 'L'
    return result
