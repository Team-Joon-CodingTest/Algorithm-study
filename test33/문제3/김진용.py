t = int(input())
for _t in range(t):
    n = int(input())
    ary = list(map(int, input().split()))
    cnt = 0
    dic = {}
    for i in ary:
        dic[str(i)] = 1
    print(dic)

    for i in range(len(ary) - 1):
        for j in range(i + 2, len(ary)):
            first = ary[i]
            second = ary[j]
            mid = (ary[i] + ary[j])//2
            print(mid)
            if dic[str(mid)]:
                cnt += 1
    print(cnt)