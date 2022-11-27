// Q1 - Creat a variable of type string and try to add a number to it?
let a = "Nikhil"
let b = 6
console.log(a + b)

// Q2 - Use typeof operator to find the data type of the string in last question?
console.log(typeof (a + b))

// Q3 - Creat a const object in javascript can you change it to hold a number later?
const c = {
  name: "Nikhil",
  section: 1,
  isPrincipal: false
}
console.log(c)
//c = 29
//This is not possible

// Q4 - Try to add a new key to the const object in problem 3 were you able to do it ?
c['friend'] = "NewName"
console.log(c)

//Q5 - Write a js program to create a word-meaning dictionary of 5 words?
const dict = {
  gingerly: "adverb with great care or caution" ,
  canicular: "adjective pertaining to the rising of the Dog Star or to the star itself",
  areology: "noun the observation and study of the planet Mars.",
  osculate: "verb (used with object) to kiss ",
  pense: "noun. a reflection or thought."
}
console.log(dict)