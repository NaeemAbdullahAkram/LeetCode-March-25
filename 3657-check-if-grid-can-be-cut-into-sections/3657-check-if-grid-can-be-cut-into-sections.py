class Solution:
    def merge_intervals(self, arr: List[List[int]]) -> List[List[int]]:
        arr.sort()
        ans = []
        for it in arr:
            if ans and ans[-1][1] > it[0]:
                ans[-1][1] = max(ans[-1][1], it[1])
            else:
                ans.append(it)
        return ans

    def checkValidCuts(self, n: int, rectangles: List[List[int]]) -> bool:
        x, y = [], []
        
        for it in rectangles:
            x1, y1, x2, y2 = it
            x.append([x1, x2])
            y.append([y1, y2])

        result1 = self.merge_intervals(x)
        if len(result1) >= 3:
            return True

        result2 = self.merge_intervals(y)
        return len(result2) >= 3