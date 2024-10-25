"""
1. 규칙을 찾고 중복되는 단어는 묶고 (개수+단어)로 표기
2. 나머지는 뒤에 붙이기
3. 문자열의 길이 리턴
"""


def solution(s):
    result = []

    if len(s) == 1:
        return 1

    for i in range(1, len(s) + 1):  # i자씩 자르기
        sb = ''
        cnt = 1
        tmp = s[:i]

        for j in range(i, len(s) + i, i):
            if tmp == s[j:i + j]:  # 앞과 같으면
                cnt += 1
            else:
                if cnt != 1:  # 앞에서 중복이 있었다면
                    sb += str(cnt) + tmp
                else:
                    sb += tmp

                tmp = s[j:j + i]
                cnt = 1
        result.append(len(sb))

    return min(result)