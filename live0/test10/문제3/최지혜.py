num = int(input())

def solution(m):
    m = {}
    is_third = 0 # 3번째 나온 문자 확인용
    flag = True # FAKE 여부 확인용

    for char in m:
        if is_third:
            if char == is_third: # is_third 다음이 is_third와 같다면
                is_third = 0
                m[char] = 0
                continue
            else:
                print("FAKE")
                return
            
        if char not in m.keys(): # 만약 문자가 딕셔너리에 없다면
            m.update({char:1}) # 딕셔너리에 문자 추가 및 카운트를 1로 설정
        elif m[char] == 2: # 만약 해당 문자의 카운트가 2라면
            m[char] = 0 # 카운트 초기화
            is_third = char
        else: # 문자가 딕셔너리에 존재하면
            m[char] += 1 # 해당 문자의 카운트를 1 증가

    if flag and is_third == 0: # flag가 True이고 is_third가 0이면
        print("OK")
    else:
        print("FAKE")

m_list = [] 
for _ in range(num):
    m_list.append(input())
for m in m_list:
    solution(m)