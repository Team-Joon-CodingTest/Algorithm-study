n, m = map(int, input().split())

ary = list(map(int, input().split()))

sum = ans = sum(ary[0:m])

# print(sum, ans)

for i in range(n-m):
    sum -= ary[i]
    sum += ary[i+m]
    ans = max(ans, sum)
print(ans)