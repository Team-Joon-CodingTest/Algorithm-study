"""
다시 푼 문제
"""
def solution(cards1, cards2, goal):
    answer = 'Yes'

    for word in goal:
        if cards1 and word == cards1[0]:
            cards1.remove(word)

        elif cards2 and word == cards2[0]:
            cards2.remove(word)
        else:
            answer = 'No'

    return answer