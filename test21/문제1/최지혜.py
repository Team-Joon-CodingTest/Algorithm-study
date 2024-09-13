import sys
input = sys.stdin.readline

# 병합 정렬 함수
def merge_sort(L):
    if len(L) == 1:
        return L
    
    mid = (len(L)+1)//2
   
    # 리스트를 중간을 기준으로 왼쪽, 오른쪽 부분으로 나눠 재귀적으로 수행
    left = merge_sort(L[:mid])
    right = merge_sort(L[mid:])
    
    i,j = 0,0 # 인덱스 초기화
    L2 = [] # 병합된 리스트를 저장할 리스트

    # 두 리스트를 병합하면서 정렬된 값을 ans에 추가
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            L2.append(left[i])
            ans.append(left[i])
            i+=1
        else:
            L2.append(right[j])
            ans.append(right[j])
            j+=1

    # 왼쪽 리스트에 남아 있는 값 처리
    while i < len(left):
        L2.append(left[i])
        ans.append(left[i])
        i+=1
    
    # 오른쪽 리스트에 남아 있는 값 처리
    while j < len(right):
        L2.append(right[j])
        ans.append(right[j])
        j+=1
    
    return L2

n, k = map(int,input().split())
a = list(map(int,input().split()))
ans = []
merge_sort(a)

# ans 리스트에 k번째 값이 존재하는지 확인 후 출력
if len(ans) >= k:
    print(ans[k-1])
else:
    print(-1)