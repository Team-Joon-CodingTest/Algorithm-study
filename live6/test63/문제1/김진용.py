n, k = map(int, input().split())
ary = list(map(int, input().split()))
start = 0
end = k-1
s_w = sum(ary[:k])
result = []
result.append(s_w)
while end < len(ary)-1:
    s_w -= ary[start]
    start += 1
    end += 1
    s_w += ary[end]
    result.append(s_w)
print(max(result))