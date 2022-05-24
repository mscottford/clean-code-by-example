// prefer singular nouns for a single value
function add(left, right) {
  return left + right;
}
add(4, 6);

function negate(value) {
  return -value;
}
negate(-10);



// use plural nouns for arrays and other collections
function sum(values) {
  let result = 0;
  for (let value of values) {
    result += value;
  }
  return result;
}
sum([1, 2, 3, 4]);


// the -er suffix can help communicate that a parameter contains a closure
function compare(left, right, comparer) {
  return comparer(left, right);
}

// avoid single letter variable names even when they are part of a closure
compare(1, 11, (l, r) => { return l - r; });

// instead spell them out
compare(1, 11, (left, right) => { return left - right; });



// avoid abbreviations
function squareRoot(val) {}

// spell them out instead
function squareRoot(value) {}



// avoid starting parameters with a capital letter
// doing so makes them look like they are class or type names
function random(SeedGenerator) {}

// use a lower case letter instead
function random(seedGenerator) {}



// avoid confusing compound acronyms
function postResult(HTTPAPI, value) {}

// clearly separate acronyms
function postResult(httpApi, value) {}


// avoid complicated prefixes
function persistName(sName) {}
function persistPerson(oPerson) {}

// using simple nouns instead
function persistName(name) { }
function persistPerson(person) { }



// avoid using the type name as a suffix
function persistName(nameString) {}
function persistPerson(personObject) {}

// instead drop the suffixes
function persistName(name) {}
function persistPerson(person) {}
