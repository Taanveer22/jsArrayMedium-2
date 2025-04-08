// sort() method change the original array
const persons = ["abul", "babul", "robul", "samul", "bulbul"];
console.log(persons);
const sortedPersons = persons.sort();
console.log(sortedPersons);
console.log(persons);

const numbers = [2, 9, 7, 4, 6, 8];
console.log(numbers);
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);
console.log(numbers);

// ascending numbers sort() using (a-b) function
const marks = [88, 33, 77, 56];
console.log(marks);
const ascendingSortedMarks = marks.sort(function (a, b) {
  return a - b;
});
console.log(ascendingSortedMarks);


// descending numbers sort() using (y-x) function
const students = [777, 222, 666];
console.log(students);
const descendingSortedStudents = students.sort(function(x,y){
    return y -x;
});
console.log(descendingSortedStudents);
