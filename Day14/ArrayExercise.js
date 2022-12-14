// Q1 - Create an array of number and take input from the user to add numbers to this array
let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Q2 - keep adding number to the array until 0 is added to the array.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
let b;
do {
  b = prompt("Enter a number")
  b = Number.parseInt(b)
  arr1.push(b)
} while (b != 0)
console.log(arr1)

// Q3 - Filter for numbers divisible by 10 from a given array
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n = arr3.filter((x) => {
  return x % 10 == 0
})
console.log(n)

// Q4 - Creat an array of square of given numbers
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sqrt = arr4.map((s) => {
  return s * s
})
console.log(sqrt)

// Q5 - Use reduce to calculate factorial of a given number from an array of first n natural number.
let arr5 = [1,2,3,4,5,6,7,8]
let fac = arr5.reduce((x1, x2) => {
  return x1 * x2
})
console.log(fac)




