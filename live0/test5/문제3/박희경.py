"""
기사단원 번호의 약수의 개수 = 공격력
제한 수치 넘기면 power로 변경
"""

def solution(number, limit, power):
    answer = 0

    # 약수 개수 구하기
    cnt_list = []
    for n in range(1, number + 1):
        cnt = 0
        for i in range(1, int(n ** (1 / 2)) + 1):
            if n % i == 0:
                cnt += 1
                if (i ** 2) != n:
                    cnt += 1
        cnt_list.append(cnt)

    for i in range(len(cnt_list)):
        if cnt_list[i] > limit:
            cnt_list[i] = power

    return sum(cnt_list)