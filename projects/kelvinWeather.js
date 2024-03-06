// Forecast for todays weather in Kelvin
const kelvin = 293

// Converting Kelvin to Celsius by subtracting 273
const celsius = kelvin - 273

// Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32

// Rounds up Fahrenheit value
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)