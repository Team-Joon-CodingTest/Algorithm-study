n = int(input())  
arr = list(map(int, input().split(' '))) 
arr.sort()  # 오름차순으로 정렬

left = 0  # 왼쪽 인덱스 초기화
right = n-1  # 오른쪽 인덱스 초기화

# 가장 처음 양끝의 값을 더한 절대값을 초기 값으로 설정
answer = abs(arr[left] + arr[right])
# 현재 최적의 두 숫자를 저장할 리스트
final = [arr[left], arr[right]]


# 양쪽 끝에서부터 중앙으로 탐색
while left < right:
    left_val = arr[left]  # 왼쪽 값
    right_val = arr[right]  # 오른쪽 값

    sum = left_val + right_val 
  
    # 두 값의 합의 절대값이 현재 저장된 answer보다 작은 경우
    if abs(sum) < answer:
        answer = abs(sum)  # 갱신
        final = [left_val, right_val]  # 최적의 값을 가진 두 숫자를 갱신
        if answer == 0:  # 합이 0이면 완벽한 해이므로 더 이상 탐색할 필요 없음
          break
    # 합이 0보다 작은 경우 왼쪽 포인터를 오른쪽으로 이동
    if sum < 0:
        left += 1
    # 합이 0보다 큰 경우 오른쪽 포인터를 왼쪽으로 이동
    else:
        right -= 1

print(final[0], final[1])
