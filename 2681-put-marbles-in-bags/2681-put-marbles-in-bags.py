import heapq
class Solution:
    def putMarbles(self, weights: List[int], k: int) -> int:
        if k == 1:
            return 0
        psum=[]
        n=len(weights)
        for i in range(0,n-1):
            psum.append(weights[i]+weights[i+1])
        maxi=[]
        mini=[]
        for i in psum:
            heapq.heappush(maxi,-i)
            if len(maxi)>k-1:
                heapq.heappop(maxi)
            heapq.heappush(mini,i)
            if len(mini)>k-1:
                heapq.heappop(mini)
        return sum(mini)-sum(-x for x in maxi)