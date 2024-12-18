"""
dp[n] = dp[n//2]
만약 n%2 == 0 이라면: dp[n] = dp[n//2]
아니라면: dp[n] = dp[n-1] + 1
<<시간초과 발생>>
거꾸로 생각하면 풀림 .. 나눌 수 있을 때까지 나누기
"""


def solution(n):
    ans = 0

    while n > 0:
        if n % 2 == 0:
            n //= 2
        else:
            n -= 1
            ans += 1

    return ans