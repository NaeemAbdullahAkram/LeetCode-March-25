class Solution:
    def countOfSubstrings(self, w: str, k: int) -> int:
        n = len(w)
        cons_count = 0 # count of constants
        ans = 0

        vowels = ("a", "e", "i", "o", "u")
        map = defaultdict(int)

        l_right = 0
        l_left = 0
        for r in range(n):
           
            if w[r] in vowels:
                map[w[r]] += 1
            else:
                cons_count += 1

            while cons_count > k and l_right < r:# lets make cons_count ==k
                if w[l_right] in vowels:
                    map[w[l_right]] -= 1
                    if map[w[l_right]] == 0:
                        del map[w[l_right]]

                else:
                    cons_count -= 1
                l_right += 1
                l_left = l_right # l_left is extreme left at which cons_count==k

            # even if cons_count==k , some vowels at left side can be removed 
            # l_right is extreme right at which cons_count==k 
            while cons_count == k and l_right < r:
                if w[l_right] in vowels:
                    if map[w[l_right]] - 1 > 0:
                        map[w[l_right]] -= 1
                        l_right += 1
                    else:
                        break
                else:
                    break

            if len(map) == 5 and cons_count == k:
                ans += (l_right - l_left + 1)  # number sub strings between l_right , l_left

        return ans