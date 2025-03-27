from collections import Counter, defaultdict
from typing import List

class Solution:
    def minimumIndex(self, nums: List[int]) -> int:
        if len(nums) < 1:
            return 0
        
        total_freq = Counter(nums)
        prefix_freq = defaultdict(int)
        n = len(nums)

        for i, num in enumerate(nums):
            prefix_freq[num] += 1
            total_freq[num] -= 1

            left_len = i + 1
            right_len = n - left_len

            # Ensure split is valid (0 <= i < n - 1)
            if i < n - 1:
                if prefix_freq[num] * 2 > left_len and total_freq[num] * 2 > right_len:
                    return i

        return -1