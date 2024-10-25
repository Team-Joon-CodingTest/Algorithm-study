test = int(input())

for t in range(test):
    k, w = map(str, input().split())
    k = int(k)
    #포인터 설정
    left = 0
    right = k
    dic = {}
    while right <= len(w): # 가장 오른쪽 포인터가 문자열 마지막까지 오기 전 까지 반복
        ary2 = w[left:right] # 첫 범위
        # 여기가 킬포 각 문자열 개수를 카운트 하고 그대로 고유한 문자열로 만들어주고
        s = str(ary2.count("A")) + str(ary2.count("G")) + str(ary2.count("C")) + str(ary2.count("T"))
        # 딕셔너리에 추가 or 증가
        if s in dic:
            dic[s] += 1
        else:
            dic[s] = 1
        # 범위 이동
        left += 1
        right += 1
    # 제일 큰거 출력
    print(max(dic.values()))