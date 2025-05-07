// search mobile or laptop name from an array of Objects
const products = [
  { id: 1, name: "hp laptop", price: 50000 },
  { id: 2, name: "asus laptop", price: 56000 },
  { id: 3, name: "symphony mobile", price: 15000 },
  { id: 4, name: "xiaomi mobile", price: 20000 },
  { id: 5, name: "msi laptop", price: 75000 },
  { id: 6, name: "samsung mobile", price: 40000 },
];
console.log(products);

// declaretion
function searchString(paramArray, searchKeyword) {
  console.log(paramArray, searchKeyword);
  const matched = [];
  for (const element of paramArray) {
    console.log(element);
    console.log(element.name);
    if (element.name.includes(searchKeyword === true)) {
      matched.push(element);
    }
  }
  return matched;
}

// invocation
console.log(searchString(products, "mobile"));
console.log(searchString(products, "laptop"));
