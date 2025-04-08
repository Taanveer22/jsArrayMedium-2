// for---of : use in array looping
// for---in: use in object looping

// practice 01
const friends = [
  "Bill Gates",
  "Steve Jobs",
  "Lary Paige",
  "Elon Mask",
  "Jeff Bejos",
  "Mark Jukerberg",
];
console.log(friends);

for (let element of friends) {
  console.log(element);
}

for (let f = 0; f < friends.length; f++) {
  console.log(f);
  console.log(friends[f]);
}

let fr = 0;
while(fr < friends.length ){
    console.log(friends[fr]);
    fr++;
}


// practice 02
const numbers = [22, 444, 77, 888, 33, 785, 35];
console.log(numbers);

for(let item of numbers) {
    console.log(item);
}

for (let n = 0; n <numbers.length; n++) {
    console.log(n);
    console.log(numbers[n]);
}

let num = 0;
while(num < numbers.length) {
    console.log(numbers[num]);
    num++;
}