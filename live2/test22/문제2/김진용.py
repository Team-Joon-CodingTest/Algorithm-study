ec, sc, mc, c = 1, 1, 1, 1
e, s, m = map(int, input().split())

while(True):
    if ec == e and sc == s and mc == m:
        break
    ec += 1
    sc += 1
    mc += 1
    c += 1
    if ec >= 16:
        ec -= 15
    if sc >= 29:
        sc -= 28
    if mc >= 20:
        mc -= 19
print(c)