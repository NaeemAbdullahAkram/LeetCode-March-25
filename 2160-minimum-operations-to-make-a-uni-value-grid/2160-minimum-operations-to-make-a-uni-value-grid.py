class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        # Get frequency counter for scaled values
        counters = self.countersGrid(grid, x)
        if counters is None:
            return -1  # Impossible transformation
            
        sum_balance = sum(val * cnt for val, cnt in counters.items())
        cells_balance = counters.total()
        min_ops = sum_balance

        # Iterate through counters and track balance changes
        for val, cnt in sorted(counters.items()):
            sum_balance -= 2 * val * cnt
            cells_balance -= 2 * cnt
            min_ops = min(min_ops, sum_balance - cells_balance * val)

        return min_ops

    @classmethod
    def countersGrid(cls, grid: List[List[int]], x: int) -> Optional[collections.Counter]:
        """ Returns a frequency counter for scaled values, or None if transformation is impossible. """
        
        mod_base = grid[0][0] % x
        
        # Populate the frequency counter while checking for validity
        scaled_values = []
        for row in grid:
            for val in row:
                if val % x != mod_base:
                    return None  # Impossible transformation
                scaled_values.append(val // x)

        return collections.Counter(scaled_values)