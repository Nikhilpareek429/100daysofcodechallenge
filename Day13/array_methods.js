// Array Method
let num = [1, 2, 3, 4, 5]
// 1 - toString() -> Converts an array to a string of comma seprated value
let a1 = num.toString(); // b is now a string
console.log(a1);

// 2 - join() -> joins all the array elements using a separator
let b = num.join("_")
console.log(b);

// 3 - pop() -> removes last element from the array and it will change the orignal array
let c = num.pop()
console.log(num)

// 4 - push() -> Adds a new element at the end of the array
let d = num.push(5)
console.log(num)

// 5, 6 - shift() -> Removes first element and returns it 
//      unshift() -> Adds element to the beginning returns new array length
let e = num.shift()
console.log(e)

let f = num.unshift(78)
console.log(f)
console.log(num)

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num1)
console.log(num1.length)

// 7 - delete -> Array element can be deleted using the delete operator
let g = delete num1[0]
console.log(num1)

// 8 - Concat() -> Used to join arrays to the given array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let newArray = a.concat(a_more)
console.log(newArray) // return a new array does not change existing arrays

// 9 - sort() -> sort() method is used to sort an array alphabetically
let compare = (a, b) => {
  return b - a
}
let arr = [551, 22, 3, 14, 5, 6, 7, 8, 229]
arr.sort(compare) // it change the array
console.log(arr)

// 10 - reverse()
arr.reverse()
console.log(arr)

// 11 - splice() -> splice can be used to add new item to an array
let arr2 = [22, 34, 555, 67, 8, 90, 65, 4, 333]
let deletedValues = arr2.splice(2, 3, 1021, 1022, 1023)
console.log(deletedValues)
console.log(arr2)

// 12 - slice() -> slice out a piece from an array. It creates a new array
let arr3 = [22, 34, 555, 67, 8, 90, 65, 4, 333]
//let newarr = arr3.slice(3)
let newarr = arr3.slice(3, 5)
console.log(newarr)