# This series of katas will introduce you to basics of doing geometry with computers.

# Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

# Write a function calculating perimeter of a Triangle defined this way.

# Tests round answers to 6 decimal places.


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Triangle:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

def distance(p1, p2):
    return ((p2.x - p1.x)**2 + (p2.y - p1.y)**2)**0.5

def triangle_perimeter(triangle):
    side1 = distance(triangle.a, triangle.b)
    side2 = distance(triangle.b, triangle.c)
    side3 = distance(triangle.c, triangle.a)
    return side1 + side2 + side3