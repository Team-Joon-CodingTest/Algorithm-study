def solution(today, terms, privacies):
    answer = []
    duration = {}
    today_year, today_month, today_day = map(int, today.split('.'))

    for term in terms:
        v, d = term.split()
        duration[v] = int(d) * 28

    for i in range(len(privacies)):
        date, p = privacies[i].split()
        privacie_year, privacie_month, privacie_day = map(int, date.split('.'))
        year = (today_year - privacie_year) * 336
        month = (today_month - privacie_month) * 28
        day = today_day - privacie_day
        total = year + month + day

        if duration[p] <= total:
            answer.append(i + 1)
    return answer