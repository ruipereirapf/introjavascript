// Forecast for todays weather in Kelvin
const kelvin = 0;

// Converting Kelvin to Celsius by subtracting 273
const celsius = kelvin - 273;

// Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounds up Fahrenheit value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

// Convert Celsius into Newtow
let newton = celsius * (33/100);

// Rounds up the value
console.log(Math.floor(newton));