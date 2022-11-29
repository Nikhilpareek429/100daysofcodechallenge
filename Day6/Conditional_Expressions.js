//Use of if else.
let a = prompt=("Hey what your age?");
a = Number.parseInt(a); // Converting the string to a number
if(a < 0)
{
  alert("This is an invalid age");
}
else if (a<9)
{
  alert("You are a kid and you cannot even think of driving");
}
else if (a<18 && a>=9)
{
  alert("You are a kid and you can think of driving after 18");
}
else
{
  alert("You can now drive as you are above 18");
}
console.log("Done");

// Use of switch 
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("Today is " + day)
