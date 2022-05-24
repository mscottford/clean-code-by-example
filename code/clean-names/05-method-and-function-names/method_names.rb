# prefer present tense verbs for method names
def perform; end
def open; end
def close; end
def validate; end

# avoid gerunds
def performing; end
def opening; end
def closing; end
def validating; end

# and avoid past tense verb forms
def performed; end
def opened; end
def closed; end
def validated; end

# better versions start with a verb
# prefix gerunds with `is_`
def is_performing; end
def is_opening; end
def is_closing; end
def is_validating; end

# prefix past tense verbs with `has_`
def has_performed; end
def has_opened; end
def has_closed; end
def has_validated; end

# in ruby these forms are typically suffixed with `?`
def performing?; end
def performed?; end
def opening?; end
def opened?; end
def closing?; end
def closed?; end
def validating?; end
def validated?; end

# also in ruby and many other scripting languages 
# accessor methods have noun names
def name; end
def place; end
def address; end

# some language communities prefer 
# prefixing accessor methods with `get_`
def get_name; end
def get_place; end
def get_address; end
