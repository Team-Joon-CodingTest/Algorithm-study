"""
사과 남으면 안 됨
골고루 나눠줘야 함

최대 공약수로 풀면 될 듯?
"""
import sys

input = sys.stdin.readline

r, g = map(int, input().split())


for i in range(min(r, g), 0, -1):
    if r % i == 0 and g % i == 0:
        # 최대 공약수
