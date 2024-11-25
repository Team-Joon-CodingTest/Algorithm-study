prime = [True] * 1000001


def bring_prime_numbers(x, y):
    result = []

    prime[0], prime[1] = False, False

    k = int(y ** 0.5)

    for i in range(2, k+1):
        if prime[i]:
            for j in range(i*i, y+1, i):
                prime[j] = False

    for i in range(x, y+1):
        if prime[i]:
            result.append(i)
    return result


n, m = map(int, input().split())

prime_numbers = bring_prime_numbers(n, m)

for i in prime_numbers:
    print(i)
