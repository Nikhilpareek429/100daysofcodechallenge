// Q1 - Use logical operators to find whether the age of a person lies between 10 and 20 ?
/*
let age = prompt("What is ypur age?")
age = Number.parseInt(age)
if(age>10 && age<20)
{
  console.log("Your age lies between 10 and 20")
}
else
{
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Q2 - Demonstrate the use of switch case statements in javaScript
/*
let age = prompt("What is ypur age?")
switch(age)
{
  case '12':
    console.log("your age is 12")
    break
  case '13':
    console.log("your age is 13")
    break
  case '14':
    console.log("your age is 14")
    break
  case '15':
    console.log("your age is 15")
    break
  default:
    console.log("your age is not special")
} 
*/

// Q3 - Write a java script program to find whether a number is divisible by 2 or 3.
/*
let num = prompt("Write a Number ?")
num = Number.parseInt(num)
if(num%2==0 && num%3==0)
{
  console.log("Your number is divisible by 2 and 3 ")
}
else
{
  console.log("Your number is not divisible by 2 and 3 ")
}
*/

 // Q4 - Write a java script program to find whether a number is divisible by either 2 or 3.
/*
let num = prompt("Write a Number ?")
num = Number.parseInt(num)
if(num%2==0)
{
  console.log("Your number is divisible by 2")
}

else if(num%3==0)
{
  console.log("Your number is divisible 3")
}
else
{
  console.log("Your number is not divisible by 2 and 3 ")
}
*/

// Q6 - Print "you can Drive" or "You Cannot Drive" based on age being greater than 18 using ternary operator
let age=19
let a = age>18?"you can drive" : "You cannot drive"
console.log(a)

