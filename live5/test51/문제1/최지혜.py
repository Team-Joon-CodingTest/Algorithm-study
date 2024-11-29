num = int(input())

def solution(msg):
    msg_list = {}
    isThird = 0
    flag = True

    for char in msg:
        if isThird: # 3번째로 나온 단어면
            if char == isThird: # isThird 다음이 isThird와 같을때
                isThird = 0
                msg_list[char] = 0
                continue
            else:
                print("FAKE")
                return
        
        if char not in msg_list.keys(): # 딕셔너리 내에 문자가 없다면
            msg_list.update({char:1})

        elif msg_list[char] ==2: # 딕셔너리 내에 문자도 있고 3번째일때
            msg_list[char] = 0
            isThird = char
        else:
            msg_list[char] +=1

    if flag and isThird == 0: # 3번 반복된 후에 한번 더 반복했을 때
        print("OK")
    else: # 3번 반복 후에 바로 문자열이 끝날 때
        print("FAKE")

arr = []
for _ in range(num):
    arr.append(input())
for msg in arr:
    solution(msg)