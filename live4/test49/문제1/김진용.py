n = int(input())
best_seller = dict()

for _ in range(n):
    book = input()
    if book not in best_seller:
        best_seller[book] = 1
    else:
        best_seller[book] += 1

sell = []

for book_name in best_seller:
    if best_seller[book_name] == max(best_seller.values()):
        sell.append([book_name, best_seller[book_name]])
sell.sort()
print(sell[0][0])