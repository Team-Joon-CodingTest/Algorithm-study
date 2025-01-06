import re


def solution(str1, str2):
    answer = 0
    str1 = str1.lower()
    str2 = str2.lower()

    str1 = re.sub(r"[^\uAC00-\uD7A30-9a-zA-Z\s]", "", str1)
    str2 = re.sub(r"[^\uAC00-\uD7A30-9a-zA-Z\s]", "", str2)

    return answer