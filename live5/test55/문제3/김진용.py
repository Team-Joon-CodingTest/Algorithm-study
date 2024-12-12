# k 개씩 골라서 넣어주는데 set에다 넣어주어서 set길이 최솟값인거 해주면 되려나..
def solution(k, tangerine):
    dic = {}
    tangerine.sort()
    for i in tangerine:
        if i in dic:
            dic[i] += 1
        else:
            dic[i] = 1
    dic = sorted(dic.items(), key=lambda x:x[1], reverse=True)

    total = 0
    result = 0
    for i in dic:
        if total + i[1] < k:
            total += i[1]
            result += 1
        elif total + i[1] == k:
            return result + 1
        else:
            return result + 1

    return dic

print(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))
print(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]))
print(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]))
