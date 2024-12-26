def solution(citations):
    citations.sort(reverse=True)
    print(citations)

    for i in range(len(citations)):
        print(citations[i], i+1)
        if citations[i] < i + 1:
            print(citations[i], i + 1)
            return i

    return len(citations)


print(solution([3, 0, 6, 1, 5]))
