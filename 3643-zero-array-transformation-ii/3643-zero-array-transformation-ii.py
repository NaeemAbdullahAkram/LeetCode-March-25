class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
        que = [0] * (len(nums) + 1)
        cnt, k = 0, 0
        for i in range(len(nums)):
            while cnt < nums[i] - que[i]:
                if len(queries) <= k: 
                    return -1
                l, r, val = queries[k]
                if r < i:
                    k += 1 
                    continue
                que[max(l, i)] += val
                que[r + 1] -= val
                k += 1
            cnt += que[i]

        return k 
        