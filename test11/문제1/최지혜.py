import sys
input = sys.stdin.readline

n, m = map(int, input().split())
num = list(map(int, input().split()))

sum = ans = sum(num[0:m])

#연속된 m일을 일해야하기 때문에 누적합에서 맨 앞 값을 빼고 하나 뒤 값을 더해보면서 제일 max 값을 찾는다
for i in range(n-m): 
    sum -= num[i]
    sum += num[i+m]
    ans = max(ans, sum)
print(ans)