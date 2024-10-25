t = int(input())

for i in range(t):
    n, m = map(int, input().split())

    a = 1
    for j in range(m-n+1, m+1):
        a *= j
    b = 1
    for j in range(1, n+1):
        b *= j
    print(a // b)