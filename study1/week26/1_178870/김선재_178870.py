'''
[투 포인터]
1. 시작점을 고정하고 끝점을 이동시키며 합을 판단
2. 부분 수열의 합이 넘어서면 시작점을 이동
'''
def solution(sequence, k):
    answer = []
    n = len(sequence)
    start = 0
    end = 0

    for i in range(len(sequence)):
        while start < k and end < n: # 시작이 k 보다 작아야함
            start += sequence[end]
            end += 1 # 끝을 오른쪽으로 한칸 이동
        if start == k: # 
            answer.append((i,end-1)) # 인덱스를 저장
        start -= sequence[i] # 이전 시작 위치의 값을 합에서 제거
            
    return sorted(answer,key=lambda x: x[1]-x[0])[0] # 가장 길이가 짧은 수열을 찾음