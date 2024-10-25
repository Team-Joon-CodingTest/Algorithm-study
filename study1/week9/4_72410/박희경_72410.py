def solution(new_id):
    new_id = new_id.lower()  # 1단계: 소문자로 변경

    answer = ''
    for word in new_id:  # 2단계
        if word.isalnum() or word in '-_.':  # isalnum(): 영어, 한글, 숫자로 되어 있는지
            answer += word

    while '..' in answer:  # 3단계
        answer = answer.replace('..', '.')

    if answer.startswith('.'):  # 4단계
        answer = answer[1:]
    if answer.endswith('.'):
        answer = answer[:-1]

    if len(answer) == 0:  # 5단계
        answer = 'a'

    if len(answer) >= 16:  # 6단계
        answer = answer[:15]
        if answer[-1] == '.':
            answer = answer[:-1]

    while len(answer) < 3:  # 7단계
        answer += answer[-1]

    return answer