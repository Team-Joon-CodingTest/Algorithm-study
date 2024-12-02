n, k = map(int, input().split())
apple_pies = list(map(int, input().split()))

start = 0
end = k - 1

max_taste = sum(apple_pies[start:end])
real_max_taste = 0
while start < n:
    max_taste += apple_pies[end]
    real_max_taste = max(real_max_taste, max_taste)

    max_taste -= apple_pies[start]
    start += 1

    end = (end + 1)%n
print(real_max_taste)