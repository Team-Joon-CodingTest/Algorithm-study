def solution(friends, gifts):
    # friends = sorted(set(friends))
    give = {friend: 0 for friend in friends}  # 준 횟수
    take = {friend: 0 for friend in friends}  # 받은 횟수
    present = {friend: 0 for friend in friends}  # 선물 지수
    next_month = {friend: 0 for friend in friends}  # 다음달에 받는 횟수
    give_take = {
        friend: {other: [0, 0] for other in set(friends) - {friend}}
        for friend in friends
    }

    for gift in gifts:
        giver, receiver = gift.split(" ")
        give[giver] += 1
        take[receiver] += 1
        give_take[giver][receiver][0] += 1
        give_take[receiver][giver][1] += 1

    give_list = list(give.values())
    take_list = list(take.values())
    present_list = list(present.values())
    present_list = [give_list[i] - take_list[i] for i in range(len(friends))]
    present = {friend: present_list[i] for i, friend in enumerate(friends)}

    for i in range(len(friends) - 1):
        friend = friends[i]
        others = friends[i + 1:]

        for other in others:
            AtoB = give_take[friend][other][0]  # A 가 B 에게 준 것
            BtoA = give_take[friend][other][1]  # A 가 B 에게 받은 것
            if AtoB > BtoA:
                next_month[friend] += 1
            elif AtoB < BtoA:
                next_month[other] += 1
            elif AtoB == BtoA:
                if present[friend] > present[other]:
                    next_month[friend] += 1
                elif present[friend] < present[other]:
                    next_month[other] += 1
                else:
                    next_month[other] += 0

    answer = max(list(next_month.values()))

    return answer