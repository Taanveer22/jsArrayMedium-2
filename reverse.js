const numbers = [11, 22, 33, 44, 55, 66, 77];
console.log(numbers);


// using reverse() method
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);


// using for---of loop method
const numbers2 =[ 2, 4, 5, 77, 88];
const reversedNumbers2 = [];
for(let num of numbers2){
    console.log(num);
    // reversedNumbers2.push(num);
    reversedNumbers2.unshift(num);
}
console.log(reversedNumbers2);



// using incremental for loop method
const numbers3 = [33, 485, 34, 8, 898];
const reversedNumbers3 = [];
for(let n = 0; n <numbers3.length; n++) {
    console.log(n);
    console.log(numbers3[n]);
    // reversedNumbers3.push(numbers3[n]);
    reversedNumbers3.unshift(numbers3[n]);
}
console.log(reversedNumbers3);


// using decremental for loop method
const numbers4 = [22, 77, 3, 4, 5];
const reversedNumbers4 = [];
for(let i = numbers4.length -1 ; i>=0; i--){
    console.log(i);
    console.log(numbers4[i]);
    reversedNumbers4.push(numbers4[i]);
}
console.log(reversedNumbers4);



