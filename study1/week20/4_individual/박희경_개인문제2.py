"""
각 원소의 값과 배열에 있는 나머지 원소의 값을 비교했을 때 작은 원소의 개수
첫 시도 - 이분탐색으로 했더니 시간 초과..
두 번째 시도 - 딕셔너리 사용해서 쉽게 풀 수 있음;
"""
import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
sorted_arr = sorted(set(arr))

dic = {}
for i in range(len(sorted_arr)):
    dic[sorted_arr[i]] = i  # key:value => sorted_arr의 요소:인덱스

for i in arr:
    print(dic[i], end=' ')
