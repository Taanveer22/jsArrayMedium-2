// problem 01
const colors = ["red", "blue", "green", "yellow", "orange"];
console.log(colors);
const reversedColors = [];
for (let i = 0; i < colors.length; i++) {
  // console.log(i);
  console.log(colors[i]);
  reversedColors.unshift(colors[i]);
}
console.log(reversedColors);

// problem 02
const numbers = [12, 98, 5, 41, 23, 78, 46];
console.log(numbers);
const evenNumbers = [];
for (let n = 0; n < numbers.length; n++) {
  // console.log(n);
  console.log(numbers[n]);
  if (numbers[n] % 2 === 0) {
    console.log(numbers[n]);
    evenNumbers.push(numbers[n]);
  }
}
console.log(evenNumbers);


// problem  03 (convert array to string)
const gamesArray = ["Tom", "Tim", "Tin", "Tik"];
console.log(gamesArray);
let gamesString = "";
for (let element of gamesArray) {
  console.log(element);
  gamesString = gamesString + element;
}
console.log(gamesString);


// problem 04 
const speech = "I am a hard working person";
console.log(speech);
const arraySpeech = speech.split(' ');
console.log(arraySpeech);
const reversedArraySpeech = [];

for(let item of arraySpeech) {
    console.log(item);
    // reversedArraySpeech.push(item);
    reversedArraySpeech.unshift(item);
}
console.log(reversedArraySpeech);

const reversedArrayString = reversedArraySpeech.join(' ');
console.log(reversedArrayString);


