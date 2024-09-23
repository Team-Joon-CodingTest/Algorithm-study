n, x = map(int, input().split())

ary = list(map(int, input().split()))

left = 0
right = x-1

if sum(ary) == 0:
    print('SAD')
    exit()

mary = []

first_total = sum(ary[left:right])
while right < n:
    first_total += ary[right]
    mary.append(first_total)
    first_total -= ary[left]
    left += 1
    right += 1

m = max(mary)
print(m)
print(mary.count(m))