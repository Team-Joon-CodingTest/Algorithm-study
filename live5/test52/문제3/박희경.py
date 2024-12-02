def max_key(score_dict):
    sorted_items = sorted(score_dict.items(), key=lambda x: (-x[1], x[0]))

    return sorted_items[0][0]


def solution(survey, choices):
    # RT_score = {"A": 0, "N": 0, "C": 0, "F": 0, "J": 0, "M": 0, "R": 0, "T": 0}
    RT_score = {"R": 0, "T": 0}
    CF_score = {"C": 0, "F": 0}
    JM_score = {"J": 0, "M": 0}
    AN_score = {"A": 0, "N": 0}

    for i in range(len(survey)):
        # 라이언형(R), 튜브형(T)
        if survey[i] == "RT":
            if choices[i] in {1, 2, 3}:
                RT_score["R"] += 1
            if choices[i] in {5, 6, 7}:
                RT_score["T"] += 1
        if survey[i] == "TR":
            if choices[i] in {1, 2, 3}:
                RT_score["T"] += 1
            if choices[i] in {5, 6, 7}:
                RT_score["R"] += 1
        # 콘형(C), 프로도형(F)
        if survey[i] == "CF":
            if choices[i] in {1, 2, 3}:
                CF_score["C"] += 1
            if choices[i] in {5, 6, 7}:
                CF_score["F"] += 1
        if survey[i] == "FC":
            if choices[i] in {1, 2, 3}:
                CF_score["F"] += 1
            if choices[i] in {5, 6, 7}:
                CF_score["C"] += 1
        # 제이지형(J), 무지형(M)
        if survey[i] == "JM":
            if choices[i] in {1, 2, 3}:
                JM_score["J"] += 1
            if choices[i] in {5, 6, 7}:
                JM_score["M"] += 1
        if survey[i] == "MJ":
            if choices[i] in {1, 2, 3}:
                JM_score["M"] += 1
            if choices[i] in {5, 6, 7}:
                JM_score["J"] += 1
        # 어피치형(A), 네오형(N)
        if survey[i] == "AN":
            if choices[i] in {1, 2, 3}:
                AN_score["A"] += 1
            if choices[i] in {5, 6, 7}:
                AN_score["N"] += 1
        if survey[i] == "NA":
            if choices[i] in {1, 2, 3}:
                AN_score["N"] += 1
            if choices[i] in {5, 6, 7}:
                AN_score["A"] += 1

    answer = ''

    answer = max_key(RT_score) + max_key(CF_score) + max_key(JM_score) + max_key(AN_score)

    return answer