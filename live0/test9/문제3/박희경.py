import sys

input = sys.stdin.readline

t = int(input())

books = []
books_dic = {}
for _ in range(t):
   books.append(input())

books_set = set(books)

for b in books_set:
    key = b
    value = 0
    books_dic[key] = value

for i in range(len(books)):
    if books[i] in books_dic.keys():
        books_dic[books[i]] += 1

max_value = max(books_dic.values())

bestseller = []
for key, value in books_dic.items():
    if value == max_value:  # 만약 가장 많이 팔린 책이 여러 개일 경우
        bestseller.append(key)

bestseller.sort()
print(bestseller[0])
