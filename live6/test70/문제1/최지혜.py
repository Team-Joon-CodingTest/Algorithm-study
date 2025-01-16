n = int(input())
m = int(input())

temp = m - n
z = 1
k = 1

# 분자 계산
for i in range(1, temp+n):
    z *= i

# 분모 계산
for i in range(1, temp+1):
    k *= i
for i  in range(1, n):
    k *= i

print(int(z/k))
