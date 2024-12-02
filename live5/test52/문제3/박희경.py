def solution(survey, choices):
    answer = ''
    # 각 지표마다 사전 순으로
    score = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0}

    for i in range(len(survey)):
        # 5 ~ 7 선택 (후자(survey[i][1]) 점수 획득)
        if choices[i] > 4:
            score[survey[i][1]] += choices[i] - 4
        # 1 ~ 3 선택 (전자(survey[i][0]) 점수 획득)
        elif choices[i] < 4:
            score[survey[i][0]] += 4 - choices[i]

    score_values = list(score.values())
    score_keys = list(score.keys())

    for i in range(0, 7, 2):
        if score_values[i] >= score_values[i + 1]:
            answer += score_keys[i]
        else:
            answer += score_keys[i + 1]

    return answer