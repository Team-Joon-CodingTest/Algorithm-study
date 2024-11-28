
def solution(new_id):
    # 1단계
    new_id_ary = list(new_id.lower())
    print(new_id_ary)
    answer = ''
    # 2단계
    for word in new_id_ary:
        if word.isalnum() or word in '-_.':
            answer += word
    print(answer)
    # 3단계
    while '..' in answer:
        answer = answer.replace('..', '.')
    print(answer)
    # 4단계
    answer = list(answer)
    if answer[0] == '.':
        answer.pop(0)
    if answer[-1] == '.':
        answer.pop()
    print(answer)
    # 5단계
    answer = ''.join(answer)
    if answer == '':
        answer += 'a'
    print(answer)
    # 6단계
    answer = list(answer)
    if len(answer) > 15:
        while len(answer) > 15:
            answer.pop()
        if answer[-1] == '.':
            answer.pop()
    print(answer)
    # 7단계
    if len(answer) <= 2:
        while len(answer) != 3:
            answer.append(answer[-1])
    print(answer)
    answer = ''.join(answer)

    return answer



print(solution("...!@BaT#*..y.abcdefghijklm"))
