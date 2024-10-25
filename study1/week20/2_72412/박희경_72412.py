"""
1. 조건들의 조합을 통해서 나올 수 있는 모든 조합을 구하기
2. 각 조건 조합을 key로 하고 점수를 value로 하는 해시맵
3. 해시맵 정렬
4. 이분탐색(low bound)로 인덱스 찾기
-> Lower Bound는 '원하는 값 이상이 처음 나오는 위치를 찾는 과정'
"""


def solution(info, query):
    # 나올 수 있는 모든 조건 (key)
    data = dict()
    for a in ['cpp', 'java', 'python', '-']:
        for b in ['backend', 'frontend', '-']:
            for c in ['junior', 'senior', '-']:
                for d in ['chicken', 'pizza', '-']:
                    data.setdefault((a, b, c, d), list())

    # 조건에 점수 넣기 (value)
    for i in info:
        i = i.split()
        for a in [i[0], '-']:
            for b in [i[1], '-']:
                for c in [i[2], '-']:
                    for d in [i[3], '-']:
                        data[(a, b, c, d)].append(int(i[4]))

    # 지원자 점수 오름차순 정렬
    for k in data:
        data[k].sort()

    answer = []

    for q in query:
        q = q.split()
        # 개발자가 원하는 조건에 해당하는 사람들의 점수
        scores = data[(q[0], q[2], q[4], q[6])]

        # 개발자가 원하는 점수보다 높은 사람 수 세기 -> 이분 탐색
        target_score = int(q[7])
        start, end = 0, len(scores)
        while start < end:
            mid = (start + end) // 2
            if scores[mid] >= target_score:
                end = mid
            else:
                start = mid + 1
        answer.append(len(scores) - start)

    return answer
