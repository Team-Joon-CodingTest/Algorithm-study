def solution(n, words):
    ary = []
    people = 1
    cnt = 1
    ary.append(words[0])
    for i in range(1, len(words)):
        # print(cnt, people, words[i])
        people += 1
        if people % n == 0:
            people = n
        else:
            people = people%n
        if words[i][0] != words[i-1][-1] or words[i] in ary:
            # print(words[i][0], words[i-1][-1])
            return [people, cnt]
        else:
            ary.append(words[i])
        if people == n:
            cnt += 1
    return [0, 0]



print(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
print(solution(5,
               ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang",
                "gather", "refer", "reference", "estimate", "executive"]))
print(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))
