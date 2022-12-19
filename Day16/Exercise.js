// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.Use confirm to ask the user if he wants to see the prompt again ans in last use console,error to log the error if the age entered is negative ??
let runAgain = true;
const canDrive = (age) => {
  return age >= 18 ? true : false
}
while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)

  if (age < 0) {
    console.error("please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("you cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}