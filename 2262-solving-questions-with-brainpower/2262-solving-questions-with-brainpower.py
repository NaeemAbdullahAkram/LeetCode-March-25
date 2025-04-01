class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        dp = [0] * n
        dp[n-1] = questions[n-1][0]
        for i in reversed(range(n-1)):
            p, bp = questions[i]
            if i + bp + 1 < n:
                dp[i] = max(p + dp[i+bp+1], dp[i+1])
            else:
                dp[i] = max(p, dp[i+1])
        return dp[0]