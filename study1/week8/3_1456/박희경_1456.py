class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        count = max_count = 0
        vowels = set("aeiou")

        for i in range(len(s)):
            if i >= k and s[i - k] in vowels:
                count -= 1

            if s[i] in vowels:
                count += 1

            if i >= k - 1:
                max_count = max(max_count, count)

        return max_count