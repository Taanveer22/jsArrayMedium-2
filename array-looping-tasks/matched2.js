// find string from an array of objects
const programmingLanguages = [
  { id: 1, name: "javascript", inventor: "brendan eich", use: "web" },
  { id: 2, name: "python", inventor: "guido van russom", use: "web" },
  { id: 3, name: "rust", inventor: "graydon hoare", use: "os" },
  { id: 4, name: "swift", inventor: "chris lattner", use: "os" },
  { id: 5, name: "c", inventor: "dennis ritchi", use: "os" },
  { id: 6, name: "php", inventor: "lesmus lerdof", use: "web" },
];
console.log(programmingLanguages);

// declaretion
function search(myArray, myKeyword) {
  console.log(myArray, myKeyword);
  const mathched = [];
  for (const element of myArray) {
    console.log(element);
    console.log(element.use);
    if (element.use.toLowerCase().includes(myKeyword.toLowerCase())) {
      mathched.push(element);
    }
  }
  return mathched;
}


// invocation
console.log(search(programmingLanguages, "web"));
console.log(search(programmingLanguages, 'OS'));
