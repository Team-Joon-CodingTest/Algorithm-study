import sys
input = sys.stdin.readline

n, x = map(int, input().split())
if (not (1 <= x <= n <= 250000)):
    exit()
li = list(map(int, input().split()))

if max(li) == 0: # 최대 방문자 수가 0이라면
    print("SAD")
else:
    num = sum(li[0:x]) # 기간 내 방문자 수
    value = num
    cnt = 1
    for i in range(x, n):
        value -= li[i-x]
        value += li[i]
        if value > num: # value 값이 새로 구한 기간 내 방문자 수보다 크다면 cnt 1로 유지
            num = value
            cnt = 1
        elif value == num: # 최대 방문자 수가 같다면 cnt 값 증가
            cnt += 1
    print(num)
    print(cnt)