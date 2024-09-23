from collections import deque


def solution(n, info):
    answer = []
    queue = deque()
    queue.append((0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))  # 현재 과녁, 현재 화살 상황
    maxGap = 0

    while queue:
        focus, arrow = queue.popleft()

        if sum(arrow) == n:  # 화살을 다 쏜 경우
            apeach, lion = 0, 0
            for i in range(11):
                if not (info[i] == 0 and arrow[i] == 0):
                    if info[i] >= arrow[i]:
                        apeach += 10 - i
                    else:
                        lion += 10 - i

            if apeach < lion:
                gap = lion - apeach
                if maxGap > gap:
                    continue
                if maxGap < gap:
                    maxGap = gap  # 최대점수차 갱신
                    answer.clear()
                answer.append(arrow)  # 최대 점수차를 내는 화살상황 저장

        elif sum(arrow) > n:  # 화살 더 쏜 경우
            continue

        elif focus == 10:  # 화살 덜 쏜 경우
            tmp = arrow.copy()
            tmp[focus] = n - sum(tmp)
            queue.append((-1, tmp))

        else:  # 화살 쏘기
            tmp = arrow.copy()
            tmp[focus] = info[focus] + 1
            queue.append((focus + 1, tmp))  # 어피치보다 1발 많이 쏘기

            tmp2 = arrow.copy()
            tmp2[focus] = 0
            queue.append((focus + 1, tmp2))  # 0발 쏘기

    if not answer:
        return [-1]
    elif len(answer) == 1:
        return answer[0]
    else:
        return answer[-1]