m = int(input())
n = int(input())

list = [] # 소수 저장할 리스트

for num in range(m, n+1): # m부터 n까지 반복
    no_prime = 0
    if num > 1:
        for i in range(2, num):
            if num % i == 0: # num이 i로 나누어 떨어지면 => 소수가 아님을 의미
                no_prime += 1 # 소수가 아님을 표시
                break
        if no_prime == 0: # 소수라면
            list.append(num) # 리스트에 num 추가
 
if len(list) > 0:
    print(sum(list))
    print(min(list))
else:
    print(-1)