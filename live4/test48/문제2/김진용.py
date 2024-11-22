r, g = map(int, input().split())

def gcd(a, b):
    while b > 0:
        temp = a
        a = b
        b = temp % b
    return a

gcd_number = gcd(r, g)

set_ary = set()

for i in range(1, int(gcd_number**0.5)+1):
    if gcd_number % i == 0:
        set_ary.add(i)
        set_ary.add(gcd_number // i)
# print(set_ary)

for i in set_ary:
    print(i, r // i, g // i)
