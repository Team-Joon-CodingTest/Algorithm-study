n = int(input())
ary = []
for i in range(n):
    ary.append(list(map(int, input().split())))

result_w = 0
result_b = 0


def recursive(a, b, n):
    global result_w
    global result_b
    c = ary[a][b]

    for i in range(a, a + n):
        for j in range(b, b + n):
            if ary[i][j] != c:
                recursive(a, b, n//2)
                recursive(a, b + n // 2, n // 2)
                recursive(a + n // 2, b, n // 2)
                recursive(a + n // 2, b + n // 2, n // 2)
                return

    if c == 0:
        result_w += 1
    else:
        result_b += 1




recursive(0, 0, n)


print(result_w)
print(result_b)