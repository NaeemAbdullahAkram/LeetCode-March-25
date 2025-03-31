class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        hm = {}
        for c in s:
            hm[c] = s.rfind(c)

        res = []
        start,end = 0,0
        for i in range(len(s)):
            end = max(end,hm[s[i]])
            if i==end:
                res.append(end-start+1)
                start = i+1
        return res