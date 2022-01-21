var fruit= "Apple";
console.log(fruit);

var fruit= "Pear";
console.log(fruit);

// let or const
// let

let snack= "pizza";
console.log(snack); //print pizza

// you cannot update 
snack= "chips";
console.log(snack);

// const
const anujBirthday = "9/02"
console.log(anujBirthday);
// use const where things don't get update like there cannot be 2 birthdays
// const anujBirthday = "9/03"
// console.log(anujBirthday);
// use let for the whole project recommended 
// anujBirthday = "9/04"
// console.log(anujBirthday);


// concatenate ----

let firstName = "Anuj";
let lastName = "Tanwar";

console.log(firstName + lastName); // print "AnujTanwar"
console.log(firstName +" "+ lastName); //Print "Anuj Tanwar"

firstName ="Paul";
lastName ="Phan";

console.log(firstName + lastName); // print "PaulPhan"
console.log(firstName +" "+ lastName); //Print "Paul Phan"
// `
let fullName = `${firstName} ${lastName}`; // "Paul Phan"
let greeting = `Hello ${fullName}`;
console.log(greeting);

