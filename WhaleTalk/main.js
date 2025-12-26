//let input = "Keep the change, u filthy animal!";
let input = "Yippie Kai Yay, Mutherfucker!";

let vowels = ["a","e","i","o","u"];
let resultArray = [];

//for (let i = 0; i < input.length; i++) {
 // console.log(i);}


for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      resultArray.push(input[i]);
     if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
    }
    }
  }
}

console.log(resultArray);
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
