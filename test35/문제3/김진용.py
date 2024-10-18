# a, b = map(int, input().split())
#
# a_ary = list(map(int, input().split()))
# b_ary = list(map(int, input().split()))
#
# while b_ary:
#     a_ary.append(b_ary.pop())
# a_ary.sort()
# print(*a_ary)

# 이게 통과 되면 안 되는데..

a, b = map(int, input().split())

a_ary = list(map(int, input().split()))
b_ary = list(map(int, input().split()))
result_ary = []

da = 0
db = 0
# print(a_ary, b_ary)
# print(da, db)
while a_ary and b_ary:
    if a_ary[-1] >= b_ary[-1]:
        result_ary.append(a_ary.pop())
    else:
        result_ary.append(b_ary.pop())

if len(a_ary) > 0:
    while a_ary:
        result_ary.append(a_ary.pop())
elif len(b_ary) > 0:
    while b_ary:
        result_ary.append(b_ary.pop())
result_ary.sort()
print(*result_ary)