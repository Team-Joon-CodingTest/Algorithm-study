def days(date):
    y, m, d = map(int, date.split("."))
    return y * 12 * 28 + m * 28 + d


def solution(today, terms, privacies):
    answer = []
    dic = {}
    for i in terms:
        dic[i.split()[0]] = int(i.split()[1])
    today = days(today)
    print(today)

    cnt = 0
    for i in privacies:
        cnt += 1
        total = days(i.split()[0]) + dic[i.split()[1]] * 28 - 1
        print(total)
        if total < today:
            answer.append(cnt)

    return answer