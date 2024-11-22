ary = list(map(int, input()))

exponent = 0
total = 0
result = []

for i in range(len(ary)-1, -1, -1):
    if exponent == 3:
        result.append(total)
        total = 0
        exponent = 0

    if ary[i] == 1:
        total += 2**exponent
    exponent += 1

result.append(str(total))

while result:
    print(result.pop(), end="")

