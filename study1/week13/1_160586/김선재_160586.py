'''
[완전탐색]  
    for문 여러번 중첩 -> target를 순회하면서 keymap에서 인덱스가 작은 경우를 sum에 더해줌
    시간초과우려, 뮨자열 배열 < 100 이여서 시도해봐도 괜찮을 것 같음
'''
def solution(keymap, targets):
    answer = []

    for target in targets:
        temp = []
        for i in range(len(target)):
            char = target[i]
            count = 101
            for key in keymap:
                if char in set(key): # 해당 키에 문자가 포함될때
                    count = min(count, key.index(char) + 1)
            temp.append(count)

        if 101 in temp: # 문자가 포함 안되는 경우
            answer.append(-1)
        else:
            answer.append(sum(temp))

    return answer