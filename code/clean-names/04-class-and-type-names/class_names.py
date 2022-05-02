# Prefer nouns for class names
class Performer: pass
class Performance: pass

# messy - avoid verb forms
class Perform: pass
class Performed: pass
class Performing: pass

# cleaner - use adjective prefixes to convey time
class ActivePerformance: pass
class PastPerformer: pass

# messy - avoid adjectives
class Huge: pass
class Small: pass
class Fast: pass
class Slow: pass

# cleaner - adjective as prefix to a noun
class SmallPerformance: pass
class FastPerformer: pass

# messy - avoid vague prefixes
class MyPerformer: pass
class APerformer: pass
class ThePerformer: pass
class ThisPerformer: pass

# messy - avoid single letter class names
class P: pass

# messy - avoid single letter prefixes
class CPerformer: pass
class TPerforer: pass

# exception: languages with templates
# C# example
# class CustomList<T> {}
# or
# class Function<TReturn, TValue> {}

# messy - avoid all capital acronyms
class HTTPAPIPerformer: pass

# cleaner - easier to see boundary between acronyms
class HttpApiPerformer: pass

# messy avoid abbrevations
class Perf: pass

# messy - avoid lower case capitalization
class performer: pass

# messy - plural used on normal class
class Performers: pass

# cleaner - plural used for collection class
class Performers:
    def __getitem__(self, key): pass
    def __iter__(self): pass


