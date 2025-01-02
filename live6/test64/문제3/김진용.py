from collections import deque


def solution(cacheSize, cities):
    result = 0
    if cacheSize == 0: return len(cities) * 5
    q = deque(maxlen=cacheSize)

    cities = [c.lower() for c in cities]

    for city in cities:
        if city not in q:
            q.append(city)
            result += 5
        else:
            q.remove(city)
            q.append(city)
            result += 1

    return result


print(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
print(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))
print(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	))
print(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	))
print(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]	))
print(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	))
