n = input()
if "0" not in n: # 10배수라면 0이 있어야 함.
    print(-1)
else:
    num = 0
    for i in range(len(n)):
        num += int(n[i])

    if num % 3 != 0:    # 3의 배수가 아니라면 -1 출력
        print(-1)
    else:
        sorted_num = sorted(n, reverse=True)    # 내림차순 정렬해주면서 리스트로 변환
        print("".join(sorted_num))  # 문자열로 연결해주고 출력