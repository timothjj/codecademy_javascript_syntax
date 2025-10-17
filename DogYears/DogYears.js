const prompt = require('prompt-sync')();

let name = prompt('What is your dog\'s name? ');
let myAge = parseFloat(prompt('What is your dog\'s age? '));

let earlyYears = 2; //I just do what I'm told to do
earlyYears = earlyYears*10.5;
let laterYears = myAge-2; //codemonkey codes
laterYears *= 4;
//console.log(`early is ${earlyYears} and late is ${laterYears}`);
let myAgeInDogYears = earlyYears+laterYears;
//name = name.toLowerCase()
console.log(`${name} is ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)