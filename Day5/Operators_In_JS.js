console.log("Operatore in Js")
// Arithmetic Operators
let a = 10;
let b = 4;

console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a / b = ", a/b)
console.log("a * b = ", a*b)
console.log("a ** b = ", a**b)
console.log("a % b = ", a%b)
console.log("a++ = ", a++)
console.log("a-- = ", a--)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a) 

//Assignment Operators
let num = 1;
num += 5  // same as num = num + 5
console.log("num is now = ", num)
num -= 5 // same as num = num - 5
console.log("num is now = ", num)
num *= 5 // same as num = num * 5
console.log("num is now = ", num)
num /= 5 // same as num = num / 5
console.log("num is now = ", num)

//Comparison Operator
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)

console.log("comp1 === comp2 is ", comp1 === comp2) // This one compare the type 
console.log("comp1 !== comp2 is ", comp1 !== comp2)

// Logical Operator 
let x = 5;
let y = 6;
console.log(x=y && x==5) // && writen true if both condition are true 
console.log(x=y && x==8)

console.log(x>y || x==5) // || writen flase if both are false 
console.log(x<y || x==5)