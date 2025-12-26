//javascript
const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 5;
    case 'friday':
      return 8;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 'Error! Please enter a valid day of the week.';
  }
}
console.log(getSleepHours('monday'));