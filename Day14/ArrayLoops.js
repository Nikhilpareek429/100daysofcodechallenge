// Looping through Arrays --> Arrays can be looped through using the classical JavaScript for loop or through some other methods discussed below

let num = [3,5,1,2,4]

//for loop
for(let i=0; i<num.length; i++)
  {
    console.log(num[i])
  }

// forEach loop
num.forEach((element) =>
{
  console.log(element*element)
})

// Array.from
let name = "Nikhil"
let arr = Array.from(name)
console.log(arr)
           
// For...of
for(let item of num)
  {
    console.log(item)
  }

// For...in
for(let i in num)
  {
    console.log(num[i])
  }
            