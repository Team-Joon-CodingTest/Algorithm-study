n = int(input())
local = sorted(list(map(int, input().split())))
m = int(input())

start = 1
end = max(local)

result = 0
while start <= end:
    mid = (start + end) // 2    # 임시로 상한 액을 중간 값으로 지정 (미래 확정 상한액)

    total = 0   # 배정 된 총액
    for i in local:
        if i >= mid:    # 상한액보다 요청예산이 더 크거나 같다면 상한액 더해주기
            total += mid
        else:           # 요청 예산이 더 적다면 요청예산 더해주기
            total += i

    if total <= m:      # 배정 된 총 액이 국가 예산보다 적거나 같다면 상한액을 더 증가 시켜보기
        result = mid    # 현재 임시 상한 액이 확정 상한액이 될 수 있으니 결과 값에 저장
        start = mid + 1
    else:               # 배정 된 총 액이 국가 예산보다 크다면 상한액 감소 시키기
        end = mid - 1

print(result)