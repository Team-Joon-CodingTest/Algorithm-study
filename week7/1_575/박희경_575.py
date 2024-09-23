class Solution(object):
    def distributeCandies(self, candyType):
        type_count = len(set(candyType))
        candy_count = len(candyType) // 2

        return min(type_count, candy_count)