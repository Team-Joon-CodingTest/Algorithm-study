test = int(input())

for _ in range(test):
    k, dna = map(str, input().split())
    k = int(k)
    dic = {}

    # 초기 윈도우에서의 문자 개수를 계산
    count_dic = {'A': 0, 'G': 0, 'C': 0, 'T': 0}
    for char in dna[:k]:
        count_dic[char] += 1

    # 첫 윈도우의 상태 저장
    s = str(count_dic['A']) + str(count_dic['G']) + str(count_dic['C']) + str(count_dic['T'])
    dic[s] = 1

    # 슬라이딩 윈도우 시작
    for end in range(k, len(dna)):
        # 새로운 문자를 추가하고, 윈도우에서 벗어난 문자를 제거
        count_dic[dna[end]] += 1
        count_dic[dna[end - k]] -= 1

        # 현재 윈도우의 상태를 문자열로 생성
        s = str(count_dic['A']) + str(count_dic['G']) + str(count_dic['C']) + str(count_dic['T'])
        if s in dic:
            dic[s] += 1
        else:
            dic[s] = 1

    print(max(dic.values()))
