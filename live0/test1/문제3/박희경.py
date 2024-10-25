def solution(name, yearning, photo):
    answer = []

    dict = {}
    cnt = 0

    for i in range(len(name)):
        key = name[i]
        value = yearning[i]
        dict[key] = value

    for p in photo:
        for person in p:
            if person in dict:
                cnt += dict[person]
        answer.append(cnt)
        cnt = 0

    return answer