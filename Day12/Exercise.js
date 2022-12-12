// Q1 - What will the following print in JavaScript?
console.log("har\"".length);

// Q2 - Explore the includes, startwith & endswith function od a string

// Use of includes() 
let sentence = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//use of startsWith()
let str = 'Saturday night plans';
console.log(str.startsWith('Sat'));
console.log(str.startsWith('Sat', 3));

//use of ends with()
let str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
console.log(str1.endsWith("best!", 18));

//Q3 - Write a program to convert a given string to lowercase
let string = prompt("Enter anything");
console.log(string.toLowerCase())

// Q4 - Extract the amount out of this string "Plese give Rs 1000"
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)

// Q5- Try to change 4th character of a given string were you ble to do it ?
let friend = "Deepika"
console.log(friend) // friend is not changed, beacuse srting is immutable 
