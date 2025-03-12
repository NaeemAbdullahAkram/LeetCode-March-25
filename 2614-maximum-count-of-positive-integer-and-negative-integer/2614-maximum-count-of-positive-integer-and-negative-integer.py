from bisect import bisect_right,bisect_left
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        return max(bisect_left(nums,0),len(nums)-bisect_right(nums,0))
        