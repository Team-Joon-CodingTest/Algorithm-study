s = input()
count = 0
for i in range(len(s)-1):
    if s[i]!=s[i+1]: # 다른 숫자가 나오면 뒤집어줘야하기 때문에 (연속된 숫자라면 뒤집는 횟수 구할 필요 x)
        count += 1
print((count+1)//2)