test = int(input())

dic = []
cnt = 0
real = 0
on = False
for t in range(test):
    word = input()
    if word == 'ENTER':
        on = True
        dic = []
    elif on and word not in dic:
        dic.append(word)
        cnt += 1
print(cnt)
# print(real)