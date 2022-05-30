function printAddress(address) {
  console.log(address.first_line);
  console.log(address.second_line);
  console.log(address.street);
  console.log(`${address.city}, ${address.state} ${address.postal_code}`);
  console.log(address.country)
}

printAddress({
  first_line: 'Ada Lovelace',
  second_line: 'Computer History Museum',
  street: '1401 N Shoreline Blvd',
  city: 'Mountain View',
  state: 'CA',
  postal_code: '94043',
  country: 'United States'
})
