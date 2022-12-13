let marks_class_12 = [11,12,13, false, "Not Present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[5] = 89
console.log(marks_class_12[5])
console.log(typeof marks_class_12)

// print array item using forloops
let arr = [1, 2, null, "present", false, 3, 4, 5, 6];
let i;
for(i=0; i<arr.length; i++)
  {
    console.log(arr[i]);
  }
