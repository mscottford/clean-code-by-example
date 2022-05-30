// this file can be run with `node parameters.js`

function printAddress(first_line, second_line, street, city, state, postal_code, country) {
  console.log(first_line);
  console.log(second_line);
  console.log(street);
  console.log(`${city}, ${state} ${postal_code}`);
  console.log(country);
}

printAddress(
  'Ada Lovelace',
  'Computer History Museum',
  '1401 N Shoreline Blvd',
  'Mountain View',
  'CA',
  '94043',
  'United States'
)
