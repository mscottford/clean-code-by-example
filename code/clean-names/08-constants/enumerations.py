from enum import Enum

# singular nouns for the containing type
class Color(Enum):
    # and singular nouns for the enumeration members
    RED = "#FF0000"
    YELLOW = "#FFFF00"
    GREEN = "#008000"
    LIME = "#00FF00"
    PURPLE = "#800080"


# avoid using plural nouns for the containing type
class Statuses(Enum):
    SUBMITTED = 1
    STARTED = 2
    SUCCEEDED = 3
    FAILED = 4


# avoid logical mismatches between the names used
# by the containing type and the enumeration members
class Activity(Enum):
    # colors aren't usually considered activities
    RED = 1
    YELLOW = 2
    GREEN = 3
