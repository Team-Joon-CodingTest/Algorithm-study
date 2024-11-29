import sys

input = sys.stdin.readline

char = input()

count = 0

for i in range(len(char) - 1):
    if char[i] != char[i + 1]:
        count += 1

print(count // 2)
