def prime(x, y):
    prime_number = [True] * 10001

    prime_number[0] = False
    prime_number[1] = False

    for i in range(2, int(10001 ** 0.5)):
        if prime_number[i]:
            for j in range(i*i, 10001, i):
                    prime_number[j] = False

    result = []
    for i in range(x, y + 1):
        if prime_number[i]:
            result.append(i)
    return result


n = int(input())
m = int(input())

if len(prime(n, m)) > 0:
    print(sum(prime(n, m)))
    print(min(prime(n, m)))
else:
    print(-1)
