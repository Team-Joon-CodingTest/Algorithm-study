import sys

input = sys.stdin.readline

t = int(input())
for _ in range(t):
    k, w = map(str, input().split())
    k = int(k)

    start, end = 0, k
    arr = []
    count_dic = {}

    while True:
        if end > len(w):
            break

        split_word = w[start:end]
        start += 1
        end += 1

        # 알파벳으로 카운트하여 카운팅
        count = str(split_word.count("A")) + str(split_word.count("G")) + str(split_word.count("C")) + str(split_word.count("T"))

        if count not in count_dic:
            count_dic[count] = 1
        else:
            count_dic[count] += 1

    print(max(count_dic.values()))

