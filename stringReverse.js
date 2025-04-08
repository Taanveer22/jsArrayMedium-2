const books = ['bangla', 'english', 'math', 'ict'];
console.log(books);


// using reverse() method
const reversedBooks = books.reverse();
console.log(reversedBooks);


// using for---of loop method
const laptops = ['msi', 'gigabyte', 'asus', 'lenovo'];
console.log(laptops);
const reversedLaptops = [];
for(let item of laptops){
    console.log(item);
    // reversedLaptops.push(item);
    reversedLaptops.unshift(item);
}
console.log(reversedLaptops);


// using incremental for loop
const mobiles = ['xiaomi', 'oppo', 'vivo', 'realme', 'apple'];
console.log(mobiles);
const reversedMobiles = [];
for(let i = 0; i < mobiles.length; i++){
    console.log(i);
    console.log(mobiles[i]);
    // reversedMobiles.push(mobiles[i]);
    reversedMobiles.unshift(mobiles[i]);
}
console.log(reversedMobiles);


// using decremental for loop
const routers = ['tp link', 'tenda', 'zte', 'cudy'];
console.log(routers);
const reversedRouters = [];
for(let j = routers.length -1; j >= 0; j--){
    console.log(j);
    console.log(routers[j]);
    reversedRouters.push(routers[j]);
}
console.log(reversedRouters);