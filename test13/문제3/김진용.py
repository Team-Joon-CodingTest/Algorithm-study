test = int(input())

sary = set()
cnt = 0
for t in range(test):
    word = input()
    if word == 'ENTER': # 'ENTER'가 뜨면 지금까지 sary에 담긴 이름 갯수 새서서 cnt 추가
        cnt += len(sary)
        sary = set()    # 초기화
    else:
        sary.add(word)
cnt += len(sary)        # 나머지 sary에 담긴 이름 개수 새서 cnt 추가
print(cnt)
