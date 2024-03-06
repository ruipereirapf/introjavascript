// Creates a variable type int with my age as value
let myAge = 29;

// Creates a variable type int with 2 as value
let earlyYears = 2;

// Multiplys the value of earlyYears by 10.5 and assigning it to itself
earlyYears *= 10.5;

// Subtracts 2 years from myAge and assigning it to 'laterYears'
let laterYears = myAge - 2;

// Multiplys the value of laterYears by 4 and assigning it to itself
laterYears *= 4;

// Adds into a new variable 'earlyYears' and 'laterYears'
let myAgeInDogYears = earlyYears + laterYears;

// Creates a new variable type string and converts to lower case
let myName = 'Rui'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)