def solution(s):
    answer = []

    s = list(s.split(' '))

    for word in s:
        if word:
            first = word[0].upper()
            remain = word[1:].lower()
            answer.append(first + remain)
        else:
            answer.append('')

    return " ".join(answer)