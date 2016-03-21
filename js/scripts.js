var bodyMassIndex = function(){
var weight = parseInt(prompt("enter weight in lbs"));
var height = parseInt(prompt("enter height in inches"));
var bmi = weight/(Math.pow(height, 2)) * 703;
alert ("You have a Body Mass Index of " + bmi.toFixed(1) + ".");
}
bodyMassIndex();
