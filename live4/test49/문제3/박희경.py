def solution(new_id):
    answer = ''
    allowed_chars = set('abcdefghijklmnopqrstuvwxyz0123456789-_.')

    for id in new_id.rstrip():
        # 1단계 대 -> 소문자로 치환
        id = id.lower()
        # 2단계 허용 가능한 문자만
        if id in allowed_chars:
            answer += id
    # 3단계 .. -> .
    while '..' in answer:
        answer = answer.replace('..', '.')

    # 4단계
    if answer.startswith('.'):
        answer = answer[1:]
    if answer.endswith('.'):
        answer = answer[:-1]

    # 5단계
    if answer == '':
        answer += 'a'

    # 6단계
    if len(answer) >= 16:
        answer = answer[:15]
        if answer.endswith('.'):
            answer = answer[:-1]

    # 7단계
    while len(answer) < 3:
        answer += answer[-1]

    return answer