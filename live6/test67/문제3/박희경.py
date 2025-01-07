import re


def solution(str1, str2):
    answer = 0
    str1 = str1.lower()
    str2 = str2.lower()

    str1_list = []
    str2_list = []
    for i in range(0, len(str1) - 1):
        word = str1[i:i + 2]
        if re.match("^[a-z]{2}$", word):
            str1_list.append(word)

    for i in range(0, len(str2) - 1):
        word = str2[i:i + 2]
        if re.match("^[a-z]{2}$", word):
            str2_list.append(word)

    # 교집합 계산
    intersection = []
    temp_str2_list = str2_list[:]   # (놓친부분) 초반엔 두 str 리스트 합치고 교집합 빼는 것으로 했는데 오답이었음
    for word in str1_list:
        if word in temp_str2_list:
            intersection.append(word)
            temp_str2_list.remove(word)

    # 합집합 계산
    union = str1_list[:] + temp_str2_list

    if len(union) == 0:
        return 65536
    else:
        similarity = len(intersection) / len(union)
    return int(similarity * 65536)