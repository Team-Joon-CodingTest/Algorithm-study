from collections import Counter

def solution(topping):
    answer = 0
    left = Counter(topping)  # 우선 왼쪽이 모든 토핑을 갖고 있음
    right = {} # 오른쪽은 아직 토핑이 없음
    
    for i in range(len(topping)): # 돌아가면서 토핑을 하나씩 나눠줌
        if topping[i] in right: # 현재 토핑이 오른쪽에 이미 존재하면
            right[topping[i]] += 1
        else: # 현재 토핑이 오른쪽에 없으면
            right[topping[i]] = 1
            
        left[topping[i]] -= 1 # 왼쪽에서 현재 토핑 하나를 줄임
        
        ## 왼쪽에 해당 토핑의 개수가 0이 되면, 왼쪽 Counter에서 해당 토핑 제거
        if not left[topping[i]]:
            del(left[topping[i]])
        
        # 왼쪽과 오른쪽이 가진 서로 다른 토핑의 종류 개수가 같으면
        if len(left) == len(right):
            answer += 1
    return answer