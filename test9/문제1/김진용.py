ejinsu = str(input())

temp = ''

for i in range(len(ejinsu)-1, -1, -1):
    temp += ejinsu[i]
ary = []
cnt = 0
num = 0
for i in range(len(temp)):
    cnt += 1
    num += int(temp[i])*(2**cnt)
    if cnt == 3:
        print(num)
        num = 0
        cnt = 0 