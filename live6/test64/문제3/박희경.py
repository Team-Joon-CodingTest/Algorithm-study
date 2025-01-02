from collections import deque


def solution(cacheSize, cities):
    ans = 0
    if cacheSize == 0:
        return len(cities) * 5

    cache = deque(maxlen=cacheSize)

    for city in cities:
        city = city.lower()
        if city in cache:
            ans += 1
            cache.remove(city)  # (놓친 부분) LRU 이기 때문에 새로 다시 캐싱
            cache.append(city)
        else:
            ans += 5
            cache.append(city)

    return ans