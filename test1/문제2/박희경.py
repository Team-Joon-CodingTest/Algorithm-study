"""
다시 푼 문제
"""
def solution(d, budget):
    answer = 0

    sum = 0  # 소비한 예산

    d.sort()

    for i in range(len(d)):
        sum += d[i]
        print(sum)
        if sum > budget:
            break
        answer = i + 1

    return answer