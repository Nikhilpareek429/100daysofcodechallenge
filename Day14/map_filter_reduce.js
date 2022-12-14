// map() -> Creates a new array by performing same operation on each array element.
let arr = [45, 23, 21]
let a = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value * value
})
console.log(a)

// filter() --> Filter an array with values that passes a test. Creates a new array
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2)

// reduce() --> Reduces an array to a single value
let arr3 = [1, 2, 3, 4, 5, 2, 3, 4]
let a3 = arr3.reduce((n1, n2) => {
  return n1 + n2
})
console.log(a3)
