import sys

input = sys.stdin.readline

s = input()

count = 0   # 숫자가 바뀌면 카운트

for i in range(len(s)-1):
    if s[i] != s[i+1]:
        count += 1

print(count//2)