R, G = map(int, input().split())

# 최대 공약수 구해주기
def gcd(a, b):
    while b>0:
        temp = a
        a = b
        b = temp % b
    return a
x = gcd(R, G)
ans=set([])

# 최대 공약수의 약수들을 ans에 저장, 제곱근도 저장..
for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        ans.add(i)
        ans.add(x//i)

for i in ans:
    print(i, R//i, G//i)