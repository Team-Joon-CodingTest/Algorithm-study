"""
1. 3번 등장
2. 다음에 한 번 더 문자 삽입
"""
import sys

input = sys.stdin.readline

t = int(input())


for _ in range(t):
    dic = {}  # 문자 숫자 세기
    message = input().strip()
    message = list(message)
    key = sorted(set(message))

    count = 0
    status = "OK"
    for k in key:
        dic[k] = 0

    i = 0
    while i < len(message):
        char = message[i]   # 현재 문자
        dic[char] += 1      # 해당 문자(char)의 개수 카운팅

        if dic[char] == 3:    # 3번 등장
            # 다음에 나오는 문자와 현재 문자가 같다면 진짜 메시지
            if i+1 < len(message) and message[i+1] == char:
                status = "OK"
                dic[char] = 0   # 초기화
                i += 1
            else:
                status = "FAKE"
                break
        i += 1

    print(status)
