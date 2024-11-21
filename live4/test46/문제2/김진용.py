def prime(s, x):
    numbers = [True] * x

    _x = int(x ** 0.5)
    numbers[0], numbers[1] = False, False
    for i in range(2, _x + 1):
        if numbers[i]:
            for j in range(i * i, x, i):
                numbers[j] = False

    return [i for i in range(s + 1, len(numbers)) if numbers[i] == True]


while True:
    n = int(input())
    if n == 0:
        break

    result = prime(n, 2 * n + 1)
    print(len(result))