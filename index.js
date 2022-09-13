// function bmiCalculator(weight, height) {
//   let bmi = Math.round(weight / Math.pow(height, 2), 1);

//   if (bmi < 18.5) {
//     return "Your BMI is" + " " + bmi + "," + " " + "so you are underweight.";
//   } else if (bmi > 18.5 && bmi < 24.9) {
//     return (
//       "Your BMI is" + " " + bmi + "," + " " + "so you have a normal weight"
//     );
//   } else {
//     return "Your BMI is" + " " + bmi + "," + " " + "so you are overweight";
//   }
// }

// console.log(bmiCalculator(80, 2));

// function whosPaying(guestList) {
//   let guestName = Math.floor(Math.random() * 4);

//   console.log(guestList[guestName] + " " + "is going to buy lunch today!");
// }

// whosPaying();

// var n = Math.round(Math.random(), 2);
// n = Math.floor(n);
// console.log("Random number:" + n);

// var b = [1, 2, 3, 5, 6];
// for (i in b) {
//   console.log(i);
// }
// var outPut = [];

// function fizzBuzz() {
//   outPut.push(Math.floor(Math.random()));

//   console.log(outPut);
// }

// fizzBuzz();

// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//   var bottleWord = "bottle";
//   if (numberOfBottles === 1) {
//     bottleWord = "bottles";
//   }
//   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//   console.log(numberOfBottles + " " + bottleWord + " of beer,");
//   console.log("Take one down, pass it around,");
//   numberOfBottles--;
//   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

function fibonacciGenerator(n) {
  let newList = [0, 1];
  for (let i = 1; i < n; i++) {
    newList.push(n[i] + n[i]);
    return newList;
  }
}

outPut = fibonacciGenerator(5);
console.log(outPut);
