N = int(input())
ary = list(map(int, input().split()))
cnt = list(map(int, input().split()))

max_ = -1000000000
min_ = 1000000000

def bt(index, total):
    global max_, min_

    if index == N:
        max_ = max(max_, total)
        min_ = min(min_, total)
        return

    if cnt[0] > 0:
        cnt[0] -= 1
        bt(index + 1, total + ary[index])
        cnt[0] += 1
    if cnt[1] > 0:
        cnt[1] -= 1
        bt(index + 1, total - ary[index])
        cnt[1] += 1
    if cnt[2] > 0:
        cnt[2] -= 1
        bt(index + 1, total * ary[index])
        cnt[2] += 1
    if cnt[3] > 0:
        cnt[3] -= 1
        bt(index + 1, int(total / ary[index]))
        cnt[3] += 1


bt(1, ary[0])
print(max_)
print(min_)