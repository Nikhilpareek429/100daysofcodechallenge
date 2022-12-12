let name = "Nikhil" 
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.slice(2, 4))
console.log(name.slice(2))

console.log(name.replace("hil", "hill"))

let friend = "Aman"
console.log(name.concat(" is a friend of ", friend))
let friend2 = "      XYZ      "
console.log(friend2)
console.log(friend2.trim())

let fr = "Shivika"
console.log(fr[0])

//use a for loop to print a string



let name1 = prompt("Enter your name");
for (i = 0; i < name1.length; i++) {
  name1.concat(name1[i])
}
console.log(name1)