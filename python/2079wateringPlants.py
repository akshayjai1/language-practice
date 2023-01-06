class Solution:
    def wateringPlants(self, flowers: List[int], k: int) -> int:
        # write your code here
        step_count = 0
        just_refilled = True
        i = 1
        tank_level = k
        n = len(flowers)
        while i<n+1:
            if flowers[i-1] <= tank_level:
                if just_refilled:
                    step_count+=i
                    just_refilled = False
                    tank_level-=flowers[i-1]
                    i+=1
                else:
                    tank_level-=flowers[i-1]
                    i+=1
                    step_count+=1
            else:
                just_refilled = True
                step_count+=i-1
                tank_level = k
        return step_count