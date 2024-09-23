"""
1. 약수의 개수를 리스트
2. limit 보다 큰 기사는 power로 변경
3. 리스트 요소의 총합 리턴
"""

def solution(number, limit, power):
    result = 0

    # 1. 약수의 개수를 리스트로 -> 시간 초과 (제곱근 생각하기)
    count_list = []

    for num in range(1, number + 1):
        count = 0
        for i in range(1, int(num ** (1 / 2)) + 1):
            if num % i == 0:
                count += 1
                if (i ** 2) != num:
                    count += 1
        count_list.append(count)

    # 2. limit 보다 큰 기사는 power로 변경
    for i in range(len(count_list)):
        if count_list[i] > limit:
            count_list[i] = power

    # 3. 리스트 요소의 총합 리턴
    result = sum(count_list)

    return result