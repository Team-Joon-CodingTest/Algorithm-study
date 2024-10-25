n, k = map(int, input().split())

ary = list(map(int, input().split()))

sum = ans = sum(ary[0:k])

for i in range(k, n + k):
    ni = i % n # 인덱스 벗어나기 방지
    sum += ary[ni] # 오른쪽 값 추가
    sum -= ary[ni - k] # 왼쪽 값 감소
    ans = max(ans, sum)

print(ans)