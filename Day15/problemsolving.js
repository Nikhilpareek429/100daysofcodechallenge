// Q1 - Write a javaScript program to generate a random number and store it in a variable. Then takes an input from the user to tell them whether the guess was correct,greater or smaller than the original number.100-(no of guesses) is the score of the user.The program is expected to terminate once the number is gussed .Number should be between 1 - 100.

let num = Math.floor((Math.random() * 100) + 1);
num = Number.parseInt(num)
let guess;
let score = 100;
while (guess != num) {
  score = score - 1;
  guess = prompt("Enter the Number : ");
  if (guess == num) {
    console.log("Congradulation! You guess the correct number.")
    console.log(`You guess the actual number in ${100 - score} chances.`)
  }
  else if (guess > num && guess < 100) {
    console.log("Your number is greater than the actual number.")
  }
  else if (guess < num && guess > 0) {
    console.log("Your number is smaller than the actual number.")
  }
  else {
    console.log("Enter number between 1 to 100")
  }
}

