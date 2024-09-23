# 균형잡힌 괄호 문자열이 되는 인덱스
def balanced(p):
    count = 0
    for i in range(len(p)):
        if p[i] == '(':
            count += 1
        else:
            count -= 1
        if count == 0:  # 개수가 같을 때
            return i


# 올바른 괄호 문자열
def correct(p):
    left_count = 0
    for i in p:
        if i == '(':
            left_count += 1
        else:
            if left_count == 0:  # 올바르지 않음 시작부터 ')' 니까
                return False
            left_count -= 1
    return True


def solution(p):
    answer = ''
    if p == '':
        return answer

    index = balanced(p)
    u = p[:index + 1]
    v = p[index + 1:]

    # u가 올바른 괄호 문자열이라면
    if correct(u):
        answer = u + solution(v)
    else:
        answer = '('
        answer += solution(v)
        answer += ')'

        # 앞뒤 문자 제거한 u
        u = list(u[1:-1])
        # 나머지 괄호 방향 반대로
        for i in range(len(u)):
            if u[i] == '(':
                u[i] = ')'
            else:
                u[i] = '('
        answer += ''.join(u)
    return answer

