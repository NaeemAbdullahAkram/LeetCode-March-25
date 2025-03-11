class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        l, count = 0, 0
        freq = {'a': 0, 'b': 0, 'c': 0}

        for r in range(len(s)):
            freq[s[r]] += 1

            while freq['a'] and freq['b'] and freq['c']:
                count += len(s)-r
                freq[s[l]] -= 1
                l += 1

        return count