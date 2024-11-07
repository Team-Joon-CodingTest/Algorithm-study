players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]


def solution(players, callings):
    stack = []

    for call in callings:
        while True:
            if call != players[-1]:
                stack.append(players.pop())
            elif call == players[-1]:
                break

        call_user = players.pop()
        temp = players.pop()
        players.append(call_user)
        players.append(temp)

        while stack:
            players.append(stack.pop())

    return players


print(solution(players, callings))
