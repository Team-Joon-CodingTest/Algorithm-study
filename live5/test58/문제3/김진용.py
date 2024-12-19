def solution(n):
    result = 0
    while n > 0:
        result += (n % 2)
        n = n // 2
    return result


print(solution(5))
print(solution(6))
print(solution(5000))
