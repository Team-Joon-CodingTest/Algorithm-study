def solution(a, b, n):
    answer = 0

    while n >= a:
        keep = n % a
        n = (n // a) * b  # 빈 a개 줬으니 b개의 콜라 받고
        answer += n
        n += keep  # 남았던 빈 병 더해주기

    return answer