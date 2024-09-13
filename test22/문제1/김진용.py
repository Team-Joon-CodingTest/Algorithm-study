n, m = map(int, input().split())
ary = []
for _ in range(n):
    a = list(map(str, input()))
    ary.append(a)
result = []
for i in range(n - 7):
    for j in range(m - 7):
        cnt1 = 0
        cnt2 = 0
        for k in range(i, i + 8):
            for l in range(j, j + 8):
                if (k + l) % 2 == 0:
                    if ary[k][l] != 'W':
                        cnt1 += 1
                    else:
                        cnt2 += 1
                else:
                    if ary[k][l] != 'B':
                        cnt1 += 1
                    else:
                        cnt2 += 1
        result.append(cnt1)
        result.append(cnt2)
print(min(result))
