document.write("Hello")

const sum = (a, b, c) => {
  console.log("yes im running " + (a + b + c))
  a + b
}

setTimeout(sum, 1000, 1, 2, 7)
// setInterval(function() {
//   alert("setinterval")
// }, 3000)
// let a = setTimeout(function() {
//   alert("I am inside the setTimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)