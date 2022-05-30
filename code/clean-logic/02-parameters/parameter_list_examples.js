function negate(value) {
  return -value;
}

// methods with single parameters 
// are easiest to read
console.log(
  `The inverse of 1 is ${negate(1)}.`
);

function collectBook(title, author) {
  console.log(
    `Recording that you own '${title}' by ${author}`
  );
}

// this method makes it hard to tell what each parameter is for
collectBook('Anna Karenina', 'Leo Tolstoy');
collectBook('Oliver Twist', 'Charles Dickens');

function addNameForAge(age, name) {
  console.log(
    `Adding ${name} to the ${age} year old group`
  );
}

// here the final word in the method name gives a 
// hint at the purpose of the first parameter
addNameForAge(10, 'Kenton');
addNameForAge(12, 'Aimee');
