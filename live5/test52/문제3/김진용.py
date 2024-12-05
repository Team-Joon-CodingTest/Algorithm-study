def solution(survey, choices):
    dic = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}

    for i in range(len(survey)):
        q, a = survey[i], choices[i]

        if a > 4:
            choice_answer = q[1]
            dic[choice_answer] += abs(a - 4)
        elif a < 4:
            choice_answer = q[0]
            dic[choice_answer] += abs(a - 4)
        else:
            continue
    result_ary = []
    for i in dic:
        result_ary.append([i, dic[i]])

    result = ''
    for i in range(0, 8, 2):
        if result_ary[i][1] < result_ary[i+1][1]:
            result += result_ary[i+1][0]
        else:
            result += result_ary[i][0]
    return result

print(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
print(solution(["TR", "RT", "TR"], [7, 1, 3]))
