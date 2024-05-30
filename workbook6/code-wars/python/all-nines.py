# Task
# Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.

# Examples:
# all_nines(11) -> 9, because 11*9 = 99.

# all_nines(12) -> -1, because 12 is even, so no multiple of it can be all 9's.

# all_nines(13) -> 76923, because 13*76923 = 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only 9's.

# NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.

def all_nines(x):
    if x % 2 == 0:
        return -1
    
    num = 9
    count = 1
    
    while True:
        if num % x == 0:
            return num // x
        
        num = num * 10 + 9
        count += 1
        
        if count > 10000:
            return -1
