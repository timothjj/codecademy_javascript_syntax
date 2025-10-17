// Get kelvin from command line arguments
const kelvin = parseFloat(process.argv[2]) || 400;

const celsius = kelvin - 273;
// celsius is 273 degrees less than kelvin
let fahrenheit = celsius * (9/5) + 32;
// function to convert to fahrenheit
fahrenheit = Math.floor(fahrenheit)
// rounding the value of fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// 0 degrees Kelvin is -460 degrees Fahrenheit.
/* 
process.argv is an array that contains all the command-line arguments passed to your Node.js script. The [2] is the index that accesses the third element of that array.
Here's how the array is structured:

process.argv[0] — the path to the Node.js executable
process.argv[1] — the path to your script file
process.argv[2] — the first argument you pass to your script
process.argv[3] — the second argument you pass to your script
*/