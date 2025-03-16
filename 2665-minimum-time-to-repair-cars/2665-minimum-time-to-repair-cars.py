from typing import List
from math import isqrt

class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        def canRepairInTime(time: int) -> bool:
            count = 0
            for r in ranks:
                count += isqrt(time // r)  # Equivalent to floor(sqrt(time / r))
                if count >= cars:
                    return True
            return False
        
        low, high = 1, max(ranks) * cars * cars
        best_time = high  # Initialize with the worst case
        
        while low <= high:
            mid = (low + high) // 2
            if canRepairInTime(mid):
                best_time = mid
                high = mid - 1  # Try for a smaller time
            else:
                low = mid + 1  # Increase time
        
        return best_time