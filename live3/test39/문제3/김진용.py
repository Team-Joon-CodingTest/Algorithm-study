roma = [1, 5, 10, 50]
ary = set()
N = int(input())


def bt(depth, total, start):
    if depth == N:
        ary.add(total)
        return

    for i in range(start, len(roma)):
        bt(depth + 1, total + roma[i], i)


bt(0, 0, 0)

print(len(ary))
