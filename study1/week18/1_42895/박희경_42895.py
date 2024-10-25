"""
n-1번 사용하여 표현한 수 집합 <연산> 1번 사용하여 표현한 수 집합
"""


def solution(N, number):
    if number == 1:
        return 1
    dp = [set() for _ in range(9)]

    # n의 사용 횟수
    for i in range(1, 9):
        dp[i].add(int(str(N) * i))  # {N, NN, NNN...}
        # j개를 사용해서 만든 값
        for j in range(1, i + 1):
            for op1 in dp[j]:
                for op2 in dp[i - j]:
                    dp[i].add(op1 + op2)
                    dp[i].add(op1 * op2)
                    dp[i].add(op1 - op2)
                    if op2 != 0:
                        dp[i].add(op1 // op2)
        if number in dp[i]:
            return i
    return -1