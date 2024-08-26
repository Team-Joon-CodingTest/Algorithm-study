t = int(input())
for i in range(t):
    n, m = map(int, input().split())
    ary = list(map(int, input().split()))

    cnt = 1
    while ary:
        if ary[0] < max(ary):
            ary.append(ary.pop(0))
        else:  # 첫번쨰 문서가 ary 안의 최댓값(가장 큰 중요도)보다 클 경우
            if m == 0:  # 그 첫번째 문서가 몇번째인지 궁금한 문서일 경우 반복문 종료
                break
            ary.pop(0)  # 그냥 꺼내서 큐에서 없애고
            cnt += 1  # 카운트 업

        if m > 0:  # 위의 if문 동작이 끝난다면 궁금한 문서의 순서를 앞당겨주기
            m -= 1
        else:  # m이 0번째까지 당겨진 상태에서 맨 뒤에 순서로 다시 밀려나야하기 때문에 m은 다시 맨 쉿 순서 번호 주기
            m = len(ary) - 1
    print(cnt)