let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = process.argv[2]; //true or false
let age = process.argv[3];
(registeredEarly === true && age > 18) ? raceNumber +=1000 : null;
//console.log(raceNumber);
(registeredEarly === true && age > 18) ? console.log(`Racer ${raceNumber}, Your start time is 9:30.`) :  null;
(registeredEarly === false && age > 18) ? console.log(`Racer ${raceNumber}, Late adults run at 11:00 am.`) :  null;
age < 18 ? console.log(`Racer ${raceNumber}, youth registrants run at 12:30 pm (regardless of registration.)`) : null;
age = 18 ? console.log(`Racer ${raceNumber}, please go to the registration desk.`) : null;