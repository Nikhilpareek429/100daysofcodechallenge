// Program to add first n natural numbers

let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) // if we use var at the place let it become globali
{
 sum += (i+1)
}
console.log("sum of first " + n + " natural number is " + sum)
console.log(i)


let obj = {
  harry:90,
  shubh:34,
  shivika:57,
  shiv:23,
  nikhil:45
}
for (let a in obj)
  {
    console.log("Marks of " + a + " are - " + obj[a])
  }

for (let b in "nikhil")
  {
    console.log(b)
  }