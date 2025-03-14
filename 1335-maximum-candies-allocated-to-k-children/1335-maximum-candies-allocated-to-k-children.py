class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        def can_divided(c):
            cnt = 0
            for candy in candies:
                cnt += candy // c
            if cnt >= k: 
                return True
            return False
        
        l, r = 0, max(candies)
        if sum(candies) < k: return 0

        while l <= r:
            m = (l + r) // 2
            if m == 0 or can_divided(m):
                l = m + 1
            else:
                r = m - 1
        
        return r