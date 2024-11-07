while True:
    n = int(input())
    if n == -1:
        break
    ary = []
    for i in range(1, n + 1):
        if n % i == 0:
            ary.append(i)

    result = 0
    ary_2 = []
    for i in range(len(ary) - 1):
        result += ary[i]
        ary_2.append(ary[i])

    if result == n:
        print(n, end=' ')
        print('=', end=' ')

        for i in range(len(ary_2)):
            print(ary_2[i], end=' ')
            if i < len(ary_2)-1:
                print('+', end=' ')
        print()
    if result != n:
        print(n, 'is NOT perfect.')
